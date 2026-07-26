/* =========================================================
   SERVER HERO RACE™
   GAME.JS FULL VERSION
   Objective + Matching + Drag & Drop
   Multiplayer + Firebase + Turbo + Audio
========================================================= */

const G = {

    lang: "ms",

    avatar: "🧑‍💻",

    room: "",

    key: "",

    player: null,

    index: 0,

    score: 0,

    xp: 0,

    start: 0,

    lastRank: null,

    questionLocked: false,

    audioContext: null,

    selectedMatch: null,

    completedMatches: [],

    dragOrder: [],

    avatars: [
        "🧑‍💻",
        "👩‍💻",
        "🧑‍🔧",
        "👩‍🔧",
        "🦸",
        "🦸‍♀️"
    ],


    /* =====================================================
       INITIALISE
    ===================================================== */

    init() {

        avatarGrid.innerHTML = this.avatars

            .map(

                (avatar, index) => `

                    <button
                        type="button"
                        class="avatar ${
                            index === 0
                                ? "selected"
                                : ""
                        }"
                        data-a="${avatar}"
                    >
                        ${avatar}
                    </button>

                `
            )

            .join("");


        avatarGrid.onclick = event => {

            const avatar =
                event.target.dataset.a;


            if (!avatar) {
                return;
            }


            this.avatar =
                avatar;


            document

                .querySelectorAll(
                    ".avatar"
                )

                .forEach(

                    button => {

                        button.classList.toggle(

                            "selected",

                            button ===
                            event.target
                        );
                    }
                );
        };


        bmBtn.onclick =
            () => this.setLang("ms");


        enBtn.onclick =
            () => this.setLang("en");


        joinBtn.onclick =
            () => this.join();


        const roomFromLink =

            new URLSearchParams(
                window.location.search
            )

                .get("room");


        if (roomFromLink) {

            roomCode.value =

                String(roomFromLink)
                    .toUpperCase();
        }


        SERVER_HERO_BYTE.setLanguage(
            this.lang
        );
    },


    /* =====================================================
       LANGUAGE
    ===================================================== */

    setLang(language) {

        this.lang =

            language === "en"
                ? "en"
                : "ms";


        SERVER_HERO_BYTE.setLanguage(
            this.lang
        );


        bmBtn.classList.toggle(

            "active",

            this.lang === "ms"
        );


        enBtn.classList.toggle(

            "active",

            this.lang === "en"
        );


        roomCode.placeholder =

            this.lang === "ms"
                ? "Kod bilik"
                : "Room code";


        playerName.placeholder =

            this.lang === "ms"
                ? "Nama pelajar"
                : "Student name";


        playerId.placeholder =

            this.lang === "ms"
                ? "ID pelajar"
                : "Student ID";


        joinBtn.textContent =

            this.lang === "ms"
                ? "MASUK BILIK"
                : "JOIN ROOM";
    },


    /* =====================================================
       AUDIO
    ===================================================== */

    initAudio() {

        if (this.audioContext) {
            return;
        }


        const AudioContextClass =

            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContextClass) {
            return;
        }


        this.audioContext =
            new AudioContextClass();
    },


    playTone(

        frequency = 440,

        duration = 0.25,

        type = "sine",

        volume = 0.12,

        delay = 0

    ) {

        this.initAudio();


        if (!this.audioContext) {
            return;
        }


        if (
            this.audioContext.state ===
            "suspended"
        ) {

            this.audioContext.resume();
        }


        const oscillator =

            this.audioContext
                .createOscillator();


        const gain =

            this.audioContext
                .createGain();


        const startTime =

            this.audioContext.currentTime +
            delay;


        oscillator.type =
            type;


        oscillator.frequency
            .setValueAtTime(

                frequency,

                startTime
            );


        gain.gain
            .setValueAtTime(

                volume,

                startTime
            );


        gain.gain
            .exponentialRampToValueAtTime(

                0.001,

                startTime +
                duration
            );


        oscillator.connect(
            gain
        );


        gain.connect(

            this.audioContext
                .destination
        );


        oscillator.start(
            startTime
        );


        oscillator.stop(

            startTime +
            duration
        );
    },


    playCorrectSound() {

        this.playTone(
            620,
            0.18,
            "sine",
            0.13,
            0
        );

        this.playTone(
            780,
            0.18,
            "sine",
            0.13,
            0.14
        );

        this.playTone(
            980,
            0.28,
            "sine",
            0.15,
            0.28
        );
    },


    playWrongSound() {

        this.playTone(
            230,
            0.25,
            "sawtooth",
            0.10,
            0
        );

        this.playTone(
            160,
            0.38,
            "sawtooth",
            0.09,
            0.22
        );
    },


    playTurboSound() {

        this.initAudio();


        if (!this.audioContext) {
            return;
        }


        const oscillator =

            this.audioContext
                .createOscillator();


        const gain =

            this.audioContext
                .createGain();


        const now =

            this.audioContext
                .currentTime;


        oscillator.type =
            "sawtooth";


        oscillator.frequency
            .setValueAtTime(

                180,

                now
            );


        oscillator.frequency
            .exponentialRampToValueAtTime(

                1100,

                now + 0.75
            );


        gain.gain
            .setValueAtTime(

                0.10,

                now
            );


        gain.gain
            .exponentialRampToValueAtTime(

                0.001,

                now + 0.80
            );


        oscillator.connect(
            gain
        );


        gain.connect(

            this.audioContext
                .destination
        );


        oscillator.start(
            now
        );


        oscillator.stop(
            now + 0.80
        );
    },


    playCountdownSound(number) {

        if (number > 0) {

            this.playTone(
                440,
                0.20,
                "square",
                0.10
            );

        } else {

            this.playTone(
                880,
                0.45,
                "square",
                0.14
            );
        }
    },


    playFinishSound() {

        const notes = [
            523,
            659,
            784,
            1046
        ];


        notes.forEach(

            (
                frequency,
                index
            ) => {

                this.playTone(

                    frequency,

                    0.35,

                    "sine",

                    0.12,

                    index * 0.18
                );
            }
        );
    },


    /* =====================================================
       JOIN ROOM
    ===================================================== */

    async join() {

        const room =

            SERVER_HERO_MP.cleanRoom(
                roomCode.value
            );


        const name =

            playerName.value.trim();


        const id =

            playerId.value.trim();


        if (
            !room ||
            !name ||
            !id
        ) {

            joinMsg.textContent =

                this.lang === "ms"
                    ? "Sila isi kod bilik, nama dan ID."
                    : "Please enter room code, name and ID.";

            return;
        }


        try {

            this.initAudio();


            const result =

                await SERVER_HERO_MP.join(

                    room,

                    {
                        name,

                        id,

                        avatar:
                            this.avatar,

                        language:
                            this.lang
                    }
                );


            this.room =
                result.room;


            this.key =
                result.key;


            this.player = {
                name,
                id,
                avatar:
                    this.avatar
            };


            joinScreen.classList.add(
                "hidden"
            );


            waitingScreen.classList.remove(
                "hidden"
            );


            waitingInfo.textContent =
                `${name} • ${room}`;


            await SERVER_HERO_MP.watchPlayer(

                room,

                result.key,

                playerData => {

                    if (!playerData) {
                        return;
                    }


                    if (
                        playerData.approved &&
                        playerData.status ===
                        "approved"
                    ) {

                        waitingInfo.textContent =

                            this.lang === "ms"
                                ? "✅ Diluluskan. Menunggu guru memulakan perlumbaan..."
                                : "✅ Approved. Waiting for the teacher to start the race...";
                    }
                }
            );


            await SERVER_HERO_MP.watchRoom(

                room,

                data => {

                    if (
                        data?.status ===
                        "racing" &&

                        !waitingScreen.classList
                            .contains(
                                "hidden"
                            )
                    ) {

                        this.startCountdown();
                    }


                    if (data?.players) {

                        this.renderRace(
                            data.players
                        );
                    }


                    if (
                        data?.status ===
                        "finished" &&

                        !gameScreen.classList
                            .contains(
                                "hidden"
                            )
                    ) {

                        this.finish(
                            data.players || {}
                        );
                    }
                }
            );

        } catch (error) {

            joinMsg.textContent =

                this.lang === "ms"
                    ? "Tidak dapat menyambung ke bilik."
                    : "Unable to connect to the room.";


            console.error(
                error
            );
        }
    },


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    startCountdown() {

        waitingScreen.classList.add(
            "hidden"
        );


        const overlay =

            document.createElement(
                "div"
            );


        overlay.className =
            "countdown-overlay";


        document.body.appendChild(
            overlay
        );


        let number = 3;


        const updateCountdown = () => {

            overlay.innerHTML = `

                <div class="countdown-number">

                    ${
                        number > 0

                            ? number

                            : this.lang === "ms"

                            ? "MULA!"

                            : "GO!"
                    }

                </div>

            `;


            this.playCountdownSound(
                number
            );


            if (number === 0) {

                setTimeout(

                    () => {

                        overlay.remove();

                        this.startRace();
                    },

                    750
                );

                return;
            }


            number -= 1;


            setTimeout(

                updateCountdown,

                850
            );
        };


        updateCountdown();
    },


    /* =====================================================
       START RACE
    ===================================================== */

    startRace() {

        waitingScreen.classList.add(
            "hidden"
        );


        resultScreen.classList.add(
            "hidden"
        );


        gameScreen.classList.remove(
            "hidden"
        );


        displayName.textContent =
            this.player.name;


        displayRoom.textContent =
            this.room;


        this.index = 0;

        this.score = 0;

        this.xp = 0;

        this.lastRank = null;

        this.questionLocked = false;

        this.selectedMatch = null;

        this.completedMatches = [];

        this.dragOrder = [];


        score.textContent = 0;

        xp.textContent = 0;

        rank.textContent = "#-";


        this.showQuestion();
    },


    /* =====================================================
       SHOW QUESTION
    ===================================================== */

    showQuestion() {

        const question =

            SERVER_HERO_QUESTIONS[
                this.index
            ];


        if (!question) {

            SERVER_HERO_MP.updatePlayer(

                this.room,

                this.key,

                {
                    finished: true,

                    status: "finished"
                }
            );


            questionArea.innerHTML = `

                <h2>

                    🏁 ${
                        this.lang === "ms"

                            ? "Anda telah selesai. Tunggu guru menamatkan perlumbaan."

                            : "You have finished. Wait for the teacher to end the race."
                    }

                </h2>

            `;

            return;
        }


        this.questionLocked =
            false;


        this.selectedMatch =
            null;


        this.completedMatches =
            [];


        this.dragOrder =
            [];


        this.start =
            Date.now();


        if (
            question.type ===
            "matching"
        ) {

            this.renderMatching(
                question
            );

            return;
        }


        if (
            question.type ===
            "dragdrop"
        ) {

            this.renderDragDrop(
                question
            );

            return;
        }


        this.renderObjective(
            question
        );
    },


    /* =====================================================
       OBJECTIVE
    ===================================================== */

    shuffleOptions(question) {

        return question.options

            .map(

                (
                    option,
                    originalIndex
                ) => ({

                    option,

                    correct:
                        originalIndex ===
                        question.answer
                })
            )

            .sort(

                () =>
                    Math.random() -
                    0.5
            );
    },


    renderObjective(question) {

        const shuffled =

            this.shuffleOptions(
                question
            );


        questionArea.innerHTML = `

            <small>

                ${
                    this.lang === "ms"
                        ? "Soalan"
                        : "Question"
                }

                ${this.index + 1}

                /

                ${SERVER_HERO_QUESTIONS.length}

            </small>


            <h2>

                ${question.q[this.lang]}

            </h2>


            <div class="answers">

                ${shuffled

                    .map(

                        (
                            item,
                            index
                        ) => `

                            <button

                                type="button"

                                class="answer"

                                data-index="${index}"

                            >

                                <b>

                                    ${String.fromCharCode(
                                        65 + index
                                    )}.

                                </b>

                                ${item.option[this.lang]}

                            </button>

                        `
                    )

                    .join("")}

            </div>

        `;


        questionArea

            .querySelectorAll(
                ".answer"
            )

            .forEach(

                (
                    button,
                    index
                ) => {

                    button.onclick =

                        () => {

                            if (
                                shuffled[index]
                                    .correct
                            ) {

                                button.classList.add(
                                    "correct"
                                );


                                this.processCorrect(
                                    question
                                );

                            } else {

                                button.classList.add(
                                    "wrong"
                                );


                                this.processWrong(
                                    question
                                );


                                setTimeout(

                                    () => {

                                        button.classList.remove(
                                            "wrong"
                                        );
                                    },

                                    850
                                );
                            }
                        };
                }
            );
    },


    /* =====================================================
       MATCHING
    ===================================================== */

    renderMatching(question) {

        const rightItems =

            [...question.pairs]

                .sort(

                    () =>
                        Math.random() -
                        0.5
                );


        questionArea.innerHTML = `

            <small>

                ${
                    this.lang === "ms"
                        ? "Soalan Padanan"
                        : "Matching Question"
                }

                ${this.index + 1}

                /

                ${SERVER_HERO_QUESTIONS.length}

            </small>


            <h2>

                ${question.q[this.lang]}

            </h2>


            <p>

                ${question.instruction[this.lang]}

            </p>


            <div class="matching-area">

                <div class="matching-column">

                    ${question.pairs

                        .map(

                            pair => `

                                <button

                                    type="button"

                                    class="match-item"

                                    data-side="left"

                                    data-id="${pair.id}"

                                >

                                    ${pair.left[this.lang]}

                                </button>

                            `
                        )

                        .join("")}

                </div>


                <div class="matching-column">

                    ${rightItems

                        .map(

                            pair => `

                                <button

                                    type="button"

                                    class="match-item"

                                    data-side="right"

                                    data-id="${pair.id}"

                                >

                                    ${pair.right[this.lang]}

                                </button>

                            `
                        )

                        .join("")}

                </div>

            </div>

        `;


        questionArea

            .querySelectorAll(
                ".match-item"
            )

            .forEach(

                button => {

                    button.onclick =

                        () => {

                            this.handleMatching(

                                button,

                                question
                            );
                        };
                }
            );
    },


    handleMatching(

        button,

        question

    ) {

        if (
            this.questionLocked ||
            button.classList.contains(
                "completed"
            )
        ) {

            return;
        }


        const side =
            button.dataset.side;


        const id =
            button.dataset.id;


        if (side === "left") {

            questionArea

                .querySelectorAll(
                    '[data-side="left"]'
                )

                .forEach(

                    item => {

                        if (
                            !item.classList.contains(
                                "completed"
                            )
                        ) {

                            item.classList.remove(
                                "selected"
                            );
                        }
                    }
                );


            button.classList.add(
                "selected"
            );


            this.selectedMatch =
                id;


            return;
        }


        if (!this.selectedMatch) {

            return;
        }


        if (
            this.selectedMatch ===
            id
        ) {

            const leftButton =

                questionArea.querySelector(

                    `[data-side="left"][data-id="${id}"]`
                );


            leftButton.classList.remove(
                "selected"
            );


            leftButton.classList.add(
                "completed"
            );


            button.classList.add(
                "completed"
            );


            leftButton.disabled =
                true;


            button.disabled =
                true;


            this.completedMatches.push(
                id
            );


            this.selectedMatch =
                null;


            this.playCorrectSound();


            if (
                this.completedMatches.length ===
                question.pairs.length
            ) {

                this.processCorrect(
                    question
                );
            }

        } else {

            this.processWrong(
                question
            );


            questionArea

                .querySelectorAll(
                    ".match-item"
                )

                .forEach(

                    item => {

                        if (
                            !item.classList.contains(
                                "completed"
                            )
                        ) {

                            item.classList.remove(
                                "selected"
                            );
                        }
                    }
                );


            this.selectedMatch =
                null;
        }
    },


    /* =====================================================
       DRAG & DROP
    ===================================================== */

    renderDragDrop(question) {

        const shuffledItems =

            [...question.items]

                .sort(

                    () =>
                        Math.random() -
                        0.5
                );


        questionArea.innerHTML = `

            <small>

                ${
                    this.lang === "ms"
                        ? "Soalan Susunan"
                        : "Ordering Question"
                }

                ${this.index + 1}

                /

                ${SERVER_HERO_QUESTIONS.length}

            </small>


            <h2>

                ${question.q[this.lang]}

            </h2>


            <p>

                ${question.instruction[this.lang]}

            </p>


            <div class="drag-container">

                <div class="drag-items">

                    ${shuffledItems

                        .map(

                            item => `

                                <button

                                    type="button"

                                    class="drag-item"

                                    data-id="${item.id}"

                                >

                                    ${item.text[this.lang]}

                                </button>

                            `
                        )

                        .join("")}

                </div>


                <div class="selected-order-box">

                    <h3>

                        ${
                            this.lang === "ms"
                                ? "Susunan Pilihan"
                                : "Selected Order"
                        }

                    </h3>


                    <div
                        id="selectedOrder"
                        class="selected-order"
                    >
                    </div>


                    <div class="drag-actions">

                        <button
                            id="resetOrderBtn"
                            type="button"
                        >

                            ${
                                this.lang === "ms"
                                    ? "TETAPKAN SEMULA"
                                    : "RESET"
                            }

                        </button>


                        <button
                            id="checkOrderBtn"
                            type="button"
                            class="primary"
                        >

                            ${
                                this.lang === "ms"
                                    ? "SEMAK JAWAPAN"
                                    : "CHECK ANSWER"
                            }

                        </button>

                    </div>

                </div>

            </div>

        `;


        questionArea

            .querySelectorAll(
                ".drag-item"
            )

            .forEach(

                button => {

                    button.onclick =

                        () => {

                            this.addDragItem(

                                button,

                                question
                            );
                        };
                }
            );


        resetOrderBtn.onclick =

            () => {

                this.resetDragOrder(
                    question
                );
            };


        checkOrderBtn.onclick =

            () => {

                this.checkDragOrder(
                    question
                );
            };
    },


    addDragItem(

        button,

        question

    ) {

        const id =
            button.dataset.id;


        if (
            this.dragOrder.includes(
                id
            )
        ) {

            return;
        }


        this.dragOrder.push(
            id
        );


        button.disabled =
            true;


        button.classList.add(
            "used"
        );


        this.renderSelectedOrder(
            question
        );
    },


    renderSelectedOrder(question) {

        selectedOrder.innerHTML =

            this.dragOrder

                .map(

                    (
                        id,
                        index
                    ) => {

                        const item =

                            question.items.find(

                                value =>
                                    value.id ===
                                    id
                            );


                        return `

                            <div class="order-item">

                                <strong>

                                    ${index + 1}.

                                </strong>

                                ${item.text[this.lang]}

                            </div>

                        `;
                    }
                )

                .join("");
    },


    resetDragOrder(question) {

        this.dragOrder = [];


        questionArea

            .querySelectorAll(
                ".drag-item"
            )

            .forEach(

                button => {

                    button.disabled =
                        false;


                    button.classList.remove(
                        "used"
                    );
                }
            );


        this.renderSelectedOrder(
            question
        );
    },


    checkDragOrder(question) {

        if (
            this.dragOrder.length !==
            question.correctOrder.length
        ) {

            SERVER_HERO_BYTE.show(

                this.lang === "ms"

                    ? "Sila pilih semua langkah sebelum menyemak jawapan."

                    : "Please select all steps before checking your answer."
            );


            this.playWrongSound();

            return;
        }


        const correct =

            this.dragOrder.every(

                (
                    id,
                    index
                ) =>

                    id ===
                    question.correctOrder[
                        index
                    ]
            );


        if (correct) {

            this.processCorrect(
                question
            );

        } else {

            this.processWrong(
                question
            );


            setTimeout(

                () => {

                    this.resetDragOrder(
                        question
                    );
                },

                900
            );
        }
    },


    /* =====================================================
       CORRECT / WRONG
    ===================================================== */

    async processCorrect(question) {

        if (this.questionLocked) {
            return;
        }


        this.questionLocked =
            true;


        questionArea

            .querySelectorAll(
                "button"
            )

            .forEach(

                button => {

                    button.disabled =
                        true;
                }
            );


        const seconds =

            (
                Date.now() -
                this.start
            ) / 1000;


        let gainedScore = 100;

        let gainedXP = 50;


        if (seconds <= 3) {

            gainedScore = 200;

            gainedXP = 100;

        } else if (seconds <= 5) {

            gainedScore = 150;

            gainedXP = 75;
        }


        this.score +=
            gainedScore;


        this.xp +=
            gainedXP;


        score.textContent =
            this.score;


        xp.textContent =
            this.xp;


        this.playCorrectSound();


        if (seconds <= 5) {

            this.playTurboSound();

            this.showTurboMessage();
        }


        SERVER_HERO_BYTE.show(

            question.ok[this.lang]
        );


        await SERVER_HERO_MP.updatePlayer(

            this.room,

            this.key,

            {
                score:
                    this.score,

                xp:
                    this.xp,

                progress:
                    this.index + 1,

                status:
                    "racing",

                lastAnswerMs:
                    Math.round(
                        seconds * 1000
                    ),

                turboUntil:

                    seconds <= 5

                        ? Date.now() +
                          1300

                        : 0
            }
        );


        setTimeout(

            () => {

                this.index += 1;

                this.showQuestion();
            },

            1900
        );
    },


    processWrong(question) {

        this.playWrongSound();


        SERVER_HERO_BYTE.show(

            question.bad[this.lang]
        );
    },


    /* =====================================================
       TURBO MESSAGE
    ===================================================== */

    showTurboMessage() {

        document
            .querySelector(
                ".turbo-message"
            )
            ?.remove();


        const message =

            document.createElement(
                "div"
            );


        message.className =
            "turbo-message";


        message.textContent =

            this.lang === "ms"
                ? "🚀 TURBO DIAKTIFKAN!"
                : "🚀 TURBO ACTIVATED!";


        document.body.appendChild(
            message
        );


        setTimeout(

            () => {

                message.remove();
            },

            1200
        );
    },


    /* =====================================================
       RACE TRACK
    ===================================================== */

    renderRace(playersObject) {

        const players =

            Object.values(
                playersObject || {}
            )

                .filter(
                    player =>
                        player.approved
                )

                .sort(

                    (
                        a,
                        b
                    ) =>

                        (
                            b.score || 0
                        )

                        -

                        (
                            a.score || 0
                        )

                        ||

                        (
                            a.lastAnswerMs ||
                            999999
                        )

                        -

                        (
                            b.lastAnswerMs ||
                            999999
                        )
                );


        const playerRank =

            players.findIndex(

                player =>
                    player.key ===
                    this.key

            ) + 1;


        rank.textContent =

            playerRank > 0
                ? `#${playerRank}`
                : "#-";


        if (
            this.lastRank &&
            playerRank > 0 &&
            playerRank <
            this.lastRank
        ) {

            this.showOvertake(

                this.lastRank -
                playerRank
            );
        }


        if (playerRank > 0) {

            this.lastRank =
                playerRank;
        }


        const now =
            Date.now();


        raceTrack.innerHTML =

            players

                .slice(0, 10)

                .map(

                    (
                        player,
                        index
                    ) => {

                        const progress =

                            Math.min(

                                90,

                                (
                                    player.progress ||
                                    0
                                )

                                /

                                SERVER_HERO_QUESTIONS
                                    .length

                                *

                                90
                            );


                        const turbo =

                            (
                                player.turboUntil ||
                                0
                            )

                            >
                            now;


                        return `

                            <div class="lane">

                                <div

                                    class="
                                        car
                                        ${
                                            player.key ===
                                            this.key

                                                ? "player-car"

                                                : ""
                                        }

                                        ${
                                            turbo
                                                ? "turbo-car"
                                                : ""
                                        }
                                    "

                                    style="
                                        left:
                                        ${progress}%;
                                    "

                                >

                                    <span class="car-icon">

                                        🏎️

                                    </span>


                                    <b>

                                        ${index + 1}.
                                        ${player.name}

                                    </b>

                                </div>

                            </div>

                        `;
                    }
                )

                .join("");
    },


    showOvertake(count) {

        document
            .querySelector(
                ".overtake-badge"
            )
            ?.remove();


        const badge =

            document.createElement(
                "div"
            );


        badge.className =
            "overtake-badge";


        badge.textContent =

            this.lang === "ms"

                ? `🚀 Anda memotong ${count} pemain!`

                : `🚀 You overtook ${count} player${
                    count > 1
                        ? "s"
                        : ""
                  }!`;


        document.body.appendChild(
            badge
        );


        setTimeout(

            () => {

                badge.remove();
            },

            1300
        );
    },


    /* =====================================================
       FINISH
    ===================================================== */

    finish(playersObject) {

        gameScreen.classList.add(
            "hidden"
        );


        resultScreen.classList.remove(
            "hidden"
        );


        const players =

            Object.values(
                playersObject || {}
            )

                .filter(
                    player =>
                        player.approved
                )

                .sort(

                    (
                        a,
                        b
                    ) =>

                        (
                            b.score || 0
                        )

                        -

                        (
                            a.score || 0
                        )

                        ||

                        (
                            a.lastAnswerMs ||
                            999999
                        )

                        -

                        (
                            b.lastAnswerMs ||
                            999999
                        )
                );


        const position =

            players.findIndex(

                player =>
                    player.key ===
                    this.key

            ) + 1;


        trophy.textContent =

            position === 1

                ? "🏆"

                : position === 2

                ? "🥈"

                : position === 3

                ? "🥉"

                : "🏁";


        finalRank.textContent =

            this.lang === "ms"

                ? `Kedudukan #${position} daripada ${players.length}`

                : `Position #${position} of ${players.length}`;


        finalStats.textContent =

            `${
                this.lang === "ms"
                    ? "Markah"
                    : "Score"
            } ${this.score} • XP ${this.xp}`;


        this.playFinishSound();
    }

};


document.addEventListener(

    "DOMContentLoaded",

    () => {

        G.init();
    }
);


window.G = G;
