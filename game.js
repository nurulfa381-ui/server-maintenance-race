/* =========================================================
   SERVER HERO RACE™
   GAME.JS FULL VERSION
   Multiplayer + Random Answers + Countdown + Audio + Turbo
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

            if (
                !event.target.dataset.a
            ) {
                return;
            }


            this.avatar =
                event.target.dataset.a;


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


        bmBtn.onclick = () =>
            this.setLang("ms");


        enBtn.onclick = () =>
            this.setLang("en");


        joinBtn.onclick = () =>
            this.join();


        const roomFromLink =

            new URLSearchParams(
                window.location.search
            )

                .get("room");


        if (
            roomFromLink
        ) {

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

        if (
            this.audioContext
        ) {
            return;
        }


        const AudioContextClass =

            window.AudioContext ||
            window.webkitAudioContext;


        if (
            !AudioContextClass
        ) {
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


        if (
            !this.audioContext
        ) {
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


        if (
            !this.audioContext
        ) {
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


    playCountdownSound(

        number

    ) {

        if (
            number > 0
        ) {

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

            SERVER_HERO_MP
                .cleanRoom(
                    roomCode.value
                );


        const name =

            playerName.value
                .trim();


        const id =

            playerId.value
                .trim();


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

                    if (
                        !playerData
                    ) {
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


                    if (
                        data?.players
                    ) {

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


            if (
                number === 0
            ) {

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


        score.textContent = 0;

        xp.textContent = 0;

        rank.textContent = "#-";


        this.showQuestion();
    },


    /* =====================================================
       QUESTION SHUFFLE
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


    /* =====================================================
       SHOW QUESTION
    ===================================================== */

    showQuestion() {

        const question =

            SERVER_HERO_QUESTIONS[
                this.index
            ];


        if (
            !question
        ) {

            SERVER_HERO_MP.updatePlayer(

                this.room,

                this.key,

                {
                    finished:
                        true,

                    status:
                        "finished"
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


        this.start =
            Date.now();


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

                            this.answer(

                                shuffled[index]
                                    .correct,

                                question,

                                button
                            );
                        };
                }
            );
    },


    /* =====================================================
       ANSWER
    ===================================================== */

    async answer(

        correct,

        question,

        button

    ) {

        if (
            this.questionLocked
        ) {
            return;
        }


        if (
            !correct
        ) {

            button.classList.add(
                "wrong"
            );


            this.playWrongSound();


            SERVER_HERO_BYTE.show(

                question.bad[
                    this.lang
                ]
            );


            setTimeout(
                () => {

                    button.classList.remove(
                        "wrong"
                    );

                },

                850
            );


            return;
        }


        this.questionLocked =
            true;


        questionArea

            .querySelectorAll(
                ".answer"
            )

            .forEach(

                answerButton => {

                    answerButton.disabled =
                        true;
                }
            );


        button.classList.add(
            "correct"
        );


        const seconds =

            (
                Date.now() -
                this.start
            ) / 1000;


        let gainedScore = 100;

        let gainedXP = 50;


        if (
            seconds <= 3
        ) {

            gainedScore = 200;

            gainedXP = 100;

        } else if (
            seconds <= 5
        ) {

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


        if (
            seconds <= 5
        ) {

            this.playTurboSound();

            this.showTurboMessage();
        }


        SERVER_HERO_BYTE.show(

            question.ok[
                this.lang
            ]
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

            1700
        );
    },


    /* =====================================================
       TURBO MESSAGE
    ===================================================== */

    showTurboMessage() {

        const oldMessage =

            document.querySelector(
                ".turbo-message"
            );


        if (
            oldMessage
        ) {

            oldMessage.remove();
        }


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

    renderRace(

        playersObject

    ) {

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


        if (
            playerRank > 0
        ) {

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


    /* =====================================================
       OVERTAKE
    ===================================================== */

    showOvertake(

        count

    ) {

        const oldBadge =

            document.querySelector(
                ".overtake-badge"
            );


        if (
            oldBadge
        ) {

            oldBadge.remove();
        }


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

    finish(

        playersObject

    ) {

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


/* =========================================================
   START AFTER PAGE LOAD
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        G.init();
    }
);


window.G = G;
