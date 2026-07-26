/* =========================================================
   SERVER HERO RACE™
   TEACHER.JS FULL VERSION V3.1

   Firebase Multiplayer
   Approve / Reject / Approve All
   Start / Pause / Resume / Restart / Finish
   Live Race Track
   Live Leaderboard
   Class Statistics
   Race Timer
   Current Question
   Export CSV
========================================================= */

const T = {

    room: "",

    roomData: null,

    timerInterval: null,

    timerStartedAt: 0,

    elapsedBeforePause: 0,


    /* =====================================================
       FIREBASE
    ===================================================== */

    async api() {

        return await window.SERVER_HERO_FIREBASE_READY;
    },


    clean(value) {

        return String(value || "")

            .trim()

            .toUpperCase()

            .replace(/[^A-Z0-9-]/g, "")

            .slice(0, 20);
    },


    /* =====================================================
       INITIALISE DASHBOARD
    ===================================================== */

    init() {

        this.createExtraControls();

        this.createAnalyticsPanel();


        createRoomBtn.onclick =
            () => this.create();


        approveAllBtn.onclick =
            () => this.approveAll();


        startRaceBtn.onclick =
            () => this.status("racing");


        finishRaceBtn.onclick =
            () => this.status("finished");


        exportCsvBtn.onclick =
            () => this.csv();


        const fullscreenButton =
            document.getElementById(
                "fullscreenBtn"
            );


        if (fullscreenButton) {

            fullscreenButton.onclick =
                () => this.toggleFullscreen();
        }


        const copyButton =
            document.getElementById(
                "copyLinkBtn"
            );


        if (copyButton) {

            copyButton.onclick =
                () => this.copyLink();
        }


        setInterval(

            () => {

                this.drawRace();

            },

            500
        );
    },


    /* =====================================================
       CREATE EXTRA BUTTONS
    ===================================================== */

    createExtraControls() {

        if (
            document.getElementById(
                "pauseRaceBtn"
            )
        ) {

            return;
        }


        const controlPanel =

            document.getElementById(
                "approveAllBtn"
            )

                ?.parentElement;


        if (!controlPanel) {

            return;
        }


        const pauseButton =

            document.createElement(
                "button"
            );


        pauseButton.id =
            "pauseRaceBtn";


        pauseButton.type =
            "button";


        pauseButton.textContent =
            "⏸️ Pause";


        pauseButton.onclick =
            () => this.pauseRace();


        const resumeButton =

            document.createElement(
                "button"
            );


        resumeButton.id =
            "resumeRaceBtn";


        resumeButton.type =
            "button";


        resumeButton.textContent =
            "▶️ Resume";


        resumeButton.onclick =
            () => this.resumeRace();


        const restartButton =

            document.createElement(
                "button"
            );


        restartButton.id =
            "restartRaceBtn";


        restartButton.type =
            "button";


        restartButton.textContent =
            "🔄 Restart";


        restartButton.onclick =
            () => this.restartRace();


        controlPanel.appendChild(
            pauseButton
        );


        controlPanel.appendChild(
            resumeButton
        );


        controlPanel.appendChild(
            restartButton
        );
    },


    /* =====================================================
       ANALYTICS PANEL
    ===================================================== */

    createAnalyticsPanel() {

        if (
            document.getElementById(
                "teacherAnalytics"
            )
        ) {

            return;
        }


        const teacherWrap =

            document.querySelector(
                ".teacher-wrap"
            );


        if (!teacherWrap) {

            return;
        }


        const section =

            document.createElement(
                "section"
            );


        section.id =
            "teacherAnalytics";


        section.className =
            "teacher-grid";


        section.innerHTML = `

            <div class="panel">

                <h2>
                    ⏱️ Pemasa Perlumbaan
                </h2>

                <div
                    id="raceTimer"
                    style="
                        font-size:46px;
                        font-weight:900;
                        color:#ffd84d;
                        text-align:center;
                        padding:20px;
                    "
                >
                    00:00
                </div>

                <p
                    id="raceStatusText"
                    style="text-align:center"
                >
                    Belum bermula
                </p>

            </div>


            <div class="panel">

                <h2>
                    🧠 Soalan Semasa
                </h2>

                <div
                    id="currentQuestionBox"
                    style="
                        min-height:120px;
                        padding:16px;
                        background:#071a35;
                        border:1px solid #356b9d;
                        border-radius:14px;
                    "
                >
                    Menunggu perlumbaan bermula.
                </div>

            </div>


            <div class="panel">

                <h2>
                    📊 Analisis Kelas
                </h2>

                <div
                    id="classAnalytics"
                    class="stats"
                >
                </div>

            </div>


            <div class="panel">

                <h2>
                    🏅 Top 10
                </h2>

                <div id="topTenList">
                    Tiada data.
                </div>

            </div>

        `;


        const firstGrid =

            teacherWrap.querySelector(
                ".teacher-grid"
            );


        if (firstGrid) {

            firstGrid.insertAdjacentElement(

                "afterend",

                section
            );

        } else {

            teacherWrap.appendChild(
                section
            );
        }
    },


    /* =====================================================
       CREATE ROOM
    ===================================================== */

    async create() {

        this.room =

            this.clean(
                newRoomCode.value
            );


        const teacher =

            teacherName.value.trim();


        if (
            !this.room ||
            !teacher
        ) {

            roomStatus.textContent =

                "Isi nama guru dan kod bilik.";

            return;
        }


        try {

            const F =

                await this.api();


            await F.update(

                F.ref(

                    F.database,

                    `rooms/${this.room}`
                ),

                {
                    code:
                        this.room,

                    teacher,

                    status:
                        "waiting",

                    currentQuestion:
                        0,

                    createdAt:
                        F.serverTimestamp()
                }
            );


            roomStatus.textContent =

                `Bilik ${this.room} berjaya dibuka.`;


            this.updateJoinLink();

            this.watch();


        } catch (error) {

            console.error(
                error
            );


            roomStatus.textContent =

                "Bilik tidak dapat dibuka.";
        }
    },


    /* =====================================================
       JOIN LINK
    ===================================================== */

    updateJoinLink() {

        const joinLinkInput =

            document.getElementById(
                "joinLink"
            );


        if (!joinLinkInput) {

            return;
        }


        const base =

            `${location.origin}${location.pathname.replace(
                "teacher.html",
                ""
            )}`;


        joinLinkInput.value =

            `${base}index.html?room=${encodeURIComponent(
                this.room
            )}`;


        const qrBox =

            document.getElementById(
                "qrBox"
            );


        if (qrBox) {

            qrBox.innerHTML = `

                <div style="text-align:center">

                    <div style="font-size:60px">
                        ▦
                    </div>

                    <strong>
                        ${this.room}
                    </strong>

                    <p style="font-size:14px">
                        Salin pautan untuk diberikan kepada pelajar.
                    </p>

                </div>

            `;
        }
    },


    copyLink() {

        const linkInput =

            document.getElementById(
                "joinLink"
            );


        if (
            !linkInput ||
            !linkInput.value
        ) {

            return;
        }


        navigator.clipboard

            .writeText(
                linkInput.value
            )

            .then(

                () => {

                    copyLinkBtn.textContent =

                        "✅ Disalin";


                    setTimeout(

                        () => {

                            copyLinkBtn.textContent =

                                "📋 Copy Link";

                        },

                        1500
                    );
                }
            )

            .catch(

                () => {

                    linkInput.select();

                    document.execCommand(
                        "copy"
                    );
                }
            );
    },


    /* =====================================================
       WATCH ROOM
    ===================================================== */

    async watch() {

        const F =

            await this.api();


        F.onValue(

            F.ref(

                F.database,

                `rooms/${this.room}`
            ),

            snapshot => {

                this.roomData =

                    snapshot.val() || {};


                this.render(
                    this.roomData
                );
            }
        );
    },


    /* =====================================================
       MAIN RENDER
    ===================================================== */

    render(data) {

        const players =

            Object.values(
                data.players || {}
            );


        const approved =

            players.filter(

                player =>
                    player.approved
            );


        const racing =

            players.filter(

                player =>
                    player.status ===
                    "racing"
            );


        const finished =

            players.filter(

                player =>
                    player.finished ||
                    player.status ===
                    "finished"
            );


        totalStudents.textContent =

            players.length;


        approvedStudents.textContent =

            approved.length;


        racingStudents.textContent =

            racing.length;


        finishedStudents.textContent =

            finished.length;


        summary.innerHTML = `

            Jumlah:

            <strong>
                ${players.length}
            </strong>

            • Diluluskan:

            <strong>
                ${approved.length}
            </strong>

            • Berlumba:

            <strong>
                ${racing.length}
            </strong>

            • Tamat:

            <strong>
                ${finished.length}
            </strong>

        `;


        this.renderStudents(
            players
        );


        const sorted =

            this.sortPlayers(
                approved
            );


        this.renderLeaderboard(
            sorted
        );


        this.renderTopThree(
            sorted
        );


        this.renderTopTen(
            sorted
        );


        this.renderAnalytics(
            players
        );


        this.renderCurrentQuestion(
            data
        );


        this.handleTimerState(
            data
        );
    },


    /* =====================================================
       SORT PLAYERS
    ===================================================== */

    sortPlayers(players) {

        return [...players]

            .sort(

                (
                    a,
                    b
                ) =>

                    (
                        Number(
                            b.score
                        ) || 0
                    )

                    -

                    (
                        Number(
                            a.score
                        ) || 0
                    )

                    ||

                    (
                        Number(
                            a.lastAnswerMs
                        ) || 999999
                    )

                    -

                    (
                        Number(
                            b.lastAnswerMs
                        ) || 999999
                    )
            );
    },


    /* =====================================================
       STUDENT LIST
    ===================================================== */

    renderStudents(players) {

        if (!players.length) {

            studentList.innerHTML =

                "<p>Tiada pelajar dalam bilik.</p>";

            return;
        }


        studentList.innerHTML =

            [...players]

                .sort(

                    (
                        a,
                        b
                    ) =>

                        String(
                            a.name || ""
                        )

                            .localeCompare(

                                String(
                                    b.name || ""
                                )
                            )
                )

                .map(

                    (
                        player,
                        index
                    ) => `

                        <div class="student-row">

                            <b>
                                ${index + 1}
                            </b>


                            <span>

                                ${player.avatar || "👤"}

                                <strong>
                                    ${player.name || "-"}
                                </strong>

                                <br>

                                <small>
                                    ${player.id || "-"}
                                </small>

                            </span>


                            <span class="${
                                player.approved
                                    ? "status-ok"
                                    : "status-wait"
                            }">

                                ${
                                    player.approved
                                        ? "✅ Approved"
                                        : "⌛ Waiting"
                                }

                            </span>


                            <strong>
                                ${Number(player.score) || 0}
                            </strong>


                            <span>

                                <button

                                    type="button"

                                    onclick="
                                        T.approve(
                                            '${player.key}',
                                            ${!player.approved}
                                        )
                                    "
                                >

                                    ${
                                        player.approved
                                            ? "Batalkan"
                                            : "Approve"
                                    }

                                </button>


                                <button

                                    type="button"

                                    onclick="
                                        T.remove(
                                            '${player.key}'
                                        )
                                    "
                                >

                                    Tolak

                                </button>

                            </span>

                        </div>

                    `
                )

                .join("");
    },


    /* =====================================================
       LEADERBOARD
    ===================================================== */

    renderLeaderboard(players) {

        if (!players.length) {

            liveLeaderboard.innerHTML =

                "Tiada pemain diluluskan.";

            return;
        }


        liveLeaderboard.innerHTML =

            players

                .map(

                    (
                        player,
                        index
                    ) => `

                        <div class="leader-row">

                            <b>

                                ${
                                    index === 0
                                        ? "🥇"
                                        : index === 1
                                        ? "🥈"
                                        : index === 2
                                        ? "🥉"
                                        : `#${index + 1}`
                                }

                            </b>


                            <span>
                                ${player.name || "-"}
                            </span>


                            <strong>
                                ${Number(player.score) || 0}
                            </strong>


                            <span>

                                ${Number(player.progress) || 0}

                                /

                                ${
                                    window.SERVER_HERO_QUESTIONS
                                        ?.length || 14
                                }

                            </span>


                            <span>
                                ${player.status || "-"}
                            </span>

                        </div>

                    `
                )

                .join("");
    },


    /* =====================================================
       TOP THREE
    ===================================================== */

    renderTopThree(players) {

        const first =

            document.getElementById(
                "firstPlace"
            );


        const second =

            document.getElementById(
                "secondPlace"
            );


        const third =

            document.getElementById(
                "thirdPlace"
            );


        if (first) {

            first.textContent =

                players[0]?.name || "-";
        }


        if (second) {

            second.textContent =

                players[1]?.name || "-";
        }


        if (third) {

            third.textContent =

                players[2]?.name || "-";
        }
    },


    /* =====================================================
       TOP TEN
    ===================================================== */

    renderTopTen(players) {

        const box =

            document.getElementById(
                "topTenList"
            );


        if (!box) {

            return;
        }


        if (!players.length) {

            box.innerHTML =

                "Tiada data.";

            return;
        }


        box.innerHTML =

            players

                .slice(0, 10)

                .map(

                    (
                        player,
                        index
                    ) => `

                        <div class="leader-row">

                            <b>
                                #${index + 1}
                            </b>

                            <span>
                                ${player.name}
                            </span>

                            <strong>
                                ${Number(player.score) || 0}
                            </strong>

                            <span>

                                ${Number(player.progress) || 0}

                                /

                                ${
                                    window.SERVER_HERO_QUESTIONS
                                        ?.length || 14
                                }

                            </span>

                            <span>
                                ${player.status || "-"}
                            </span>

                        </div>

                    `
                )

                .join("");
    },


    /* =====================================================
       CLASS ANALYTICS
    ===================================================== */

    renderAnalytics(players) {

        const box =

            document.getElementById(
                "classAnalytics"
            );


        if (!box) {

            return;
        }


        const totalScore =

            players.reduce(

                (
                    total,
                    player
                ) =>

                    total +
                    (
                        Number(
                            player.score
                        ) || 0
                    ),

                0
            );


        const averageScore =

            players.length

                ? Math.round(

                    totalScore /
                    players.length
                )

                : 0;


        const correctAnswers =

            players.reduce(

                (
                    total,
                    player
                ) =>

                    total +
                    (
                        Number(
                            player.correctCount
                        ) || 0
                    ),

                0
            );


        const wrongAnswers =

            players.reduce(

                (
                    total,
                    player
                ) =>

                    total +
                    (
                        Number(
                            player.wrongCount
                        ) || 0
                    ),

                0
            );


        const fastAnswers =

            players.reduce(

                (
                    total,
                    player
                ) =>

                    total +
                    (
                        Number(
                            player.fastCount
                        ) || 0
                    ),

                0
            );


        box.innerHTML = `

            <span>

                📈 Purata

                <br>

                <b>
                    ${averageScore}
                </b>

            </span>


            <span>

                ✅ Betul

                <br>

                <b>
                    ${correctAnswers}
                </b>

            </span>


            <span>

                ❌ Salah

                <br>

                <b>
                    ${wrongAnswers}
                </b>

            </span>


            <span>

                ⚡ Pantas

                <br>

                <b>
                    ${fastAnswers}
                </b>

            </span>

        `;
    },


    /* =====================================================
       CURRENT QUESTION
    ===================================================== */

    renderCurrentQuestion(data) {

        const box =

            document.getElementById(
                "currentQuestionBox"
            );


        if (!box) {

            return;
        }


        const players =

            Object.values(
                data.players || {}
            );


        const highestProgress =

            Math.max(

                0,

                ...players.map(

                    player =>

                        Number(
                            player.progress
                        ) || 0
                )
            );


        const question =

            window.SERVER_HERO_QUESTIONS?.[
                highestProgress
            ];


        if (!question) {

            box.innerHTML =

                data.status === "finished"

                    ? "🏁 Perlumbaan telah tamat."

                    : "Menunggu pelajar menjawab.";

            return;
        }


        box.innerHTML = `

            <strong>

                Soalan ${highestProgress + 1}

                /

                ${
                    window.SERVER_HERO_QUESTIONS
                        .length
                }

            </strong>

            <hr>

            ${question.q.ms}

        `;
    },


    /* =====================================================
       APPROVE / REMOVE
    ===================================================== */

    async approve(

        key,

        value

    ) {

        if (!this.room) {

            return;
        }


        const F =

            await this.api();


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}/players/${key}`
            ),

            {
                approved:
                    value,

                status:

                    value
                        ? "approved"
                        : "waiting"
            }
        );
    },


    async remove(key) {

        if (!this.room) {

            return;
        }


        const confirmed =

            confirm(

                "Keluarkan pelajar ini daripada bilik?"
            );


        if (!confirmed) {

            return;
        }


        const F =

            await this.api();


        await F.remove(

            F.ref(

                F.database,

                `rooms/${this.room}/players/${key}`
            )
        );
    },


    async approveAll() {

        if (!this.room) {

            roomStatus.textContent =

                "Buka bilik terlebih dahulu.";

            return;
        }


        const F =

            await this.api();


        const snapshot =

            await F.get(

                F.ref(

                    F.database,

                    `rooms/${this.room}/players`
                )
            );


        const players =

            snapshot.val() || {};


        const updates = {};


        Object.keys(players)

            .forEach(

                key => {

                    updates[
                        `${key}/approved`
                    ] = true;


                    updates[
                        `${key}/status`
                    ] = "approved";
                }
            );


        if (!Object.keys(updates).length) {

            roomStatus.textContent =

                "Belum ada pelajar.";

            return;
        }


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}/players`
            ),

            updates
        );


        roomStatus.textContent =

            "Semua pelajar telah diluluskan.";
    },


    /* =====================================================
       START / FINISH
    ===================================================== */

    async status(value) {

        if (!this.room) {

            roomStatus.textContent =

                "Buka bilik terlebih dahulu.";

            return;
        }


        const F =

            await this.api();


        const approvedCount =

            Number(
                approvedStudents.textContent
            ) || 0;


        if (
            value === "racing" &&
            approvedCount === 0
        ) {

            roomStatus.textContent =

                "Luluskan pelajar dahulu.";

            return;
        }


        const updates = {

            status:
                value
        };


        if (
            value === "racing"
        ) {

            updates.startedAt =

                F.serverTimestamp();


            updates.pausedAt =

                null;


            updates.elapsedBeforePause =

                0;


            this.elapsedBeforePause = 0;
        }


        if (
            value === "finished"
        ) {

            updates.finishedAt =

                F.serverTimestamp();
        }


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}`
            ),

            updates
        );


        roomStatus.textContent =

            value === "racing"

                ? "Perlumbaan telah dimulakan."

                : "Perlumbaan telah ditamatkan.";
    },


    /* =====================================================
       PAUSE
    ===================================================== */

    async pauseRace() {

        if (!this.room) {

            return;
        }


        const F =

            await this.api();


        this.elapsedBeforePause =

            this.getElapsedSeconds();


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}`
            ),

            {
                status:
                    "paused",

                pausedAt:
                    F.serverTimestamp(),

                elapsedBeforePause:
                    this.elapsedBeforePause
            }
        );


        roomStatus.textContent =

            "Perlumbaan dijeda.";
    },


    /* =====================================================
       RESUME
    ===================================================== */

    async resumeRace() {

        if (!this.room) {

            return;
        }


        const F =

            await this.api();


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}`
            ),

            {
                status:
                    "racing",

                startedAt:
                    F.serverTimestamp(),

                pausedAt:
                    null,

                elapsedBeforePause:
                    Number(
                        this.roomData
                            ?.elapsedBeforePause
                    ) || 0
            }
        );


        roomStatus.textContent =

            "Perlumbaan disambung.";
    },


    /* =====================================================
       RESTART
    ===================================================== */

    async restartRace() {

        if (!this.room) {

            return;
        }


        const confirmed =

            confirm(

                "Mulakan semula perlumbaan dan kosongkan semua markah?"
            );


        if (!confirmed) {

            return;
        }


        const F =

            await this.api();


        const snapshot =

            await F.get(

                F.ref(

                    F.database,

                    `rooms/${this.room}/players`
                )
            );


        const players =

            snapshot.val() || {};


        const updates = {};


        Object.keys(players)

            .forEach(

                key => {

                    updates[
                        `${key}/score`
                    ] = 0;


                    updates[
                        `${key}/xp`
                    ] = 0;


                    updates[
                        `${key}/progress`
                    ] = 0;


                    updates[
                        `${key}/finished`
                    ] = false;


                    updates[
                        `${key}/correctCount`
                    ] = 0;


                    updates[
                        `${key}/wrongCount`
                    ] = 0;


                    updates[
                        `${key}/fastCount`
                    ] = 0;


                    updates[
                        `${key}/status`
                    ] = "approved";
                }
            );


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}/players`
            ),

            updates
        );


        await F.update(

            F.ref(

                F.database,

                `rooms/${this.room}`
            ),

            {
                status:
                    "waiting",

                startedAt:
                    null,

                finishedAt:
                    null,

                pausedAt:
                    null,

                elapsedBeforePause:
                    0
            }
        );


        this.stopTimer();

        this.setTimerDisplay(
            0
        );


        roomStatus.textContent =

            "Perlumbaan telah ditetapkan semula.";
    },


    /* =====================================================
       TIMER
    ===================================================== */

    handleTimerState(data) {

        const statusText =

            document.getElementById(
                "raceStatusText"
            );


        if (
            statusText
        ) {

            const labels = {

                waiting:
                    "Menunggu",

                racing:
                    "Sedang berlumba",

                paused:
                    "Dijeda",

                finished:
                    "Tamat"
            };


            statusText.textContent =

                labels[data.status] ||
                "Belum bermula";
        }


        if (
            data.status === "racing"
        ) {

            this.timerStartedAt =

                Date.now();


            this.elapsedBeforePause =

                Number(
                    data.elapsedBeforePause
                ) || 0;


            this.startTimer();

            return;
        }


        if (
            data.status === "paused"
        ) {

            this.stopTimer();


            this.setTimerDisplay(

                Number(
                    data.elapsedBeforePause
                ) || 0
            );

            return;
        }


        if (
            data.status === "finished"
        ) {

            this.stopTimer();

            return;
        }


        this.stopTimer();

        this.setTimerDisplay(
            0
        );
    },


    startTimer() {

        this.stopTimer();


        this.timerInterval =

            setInterval(

                () => {

                    this.setTimerDisplay(

                        this.getElapsedSeconds()
                    );

                },

                1000
            );
    },


    stopTimer() {

        if (
            this.timerInterval
        ) {

            clearInterval(
                this.timerInterval
            );


            this.timerInterval =
                null;
        }
    },


    getElapsedSeconds() {

        if (
            !this.timerStartedAt
        ) {

            return this.elapsedBeforePause;
        }


        return (

            this.elapsedBeforePause +

            Math.floor(

                (
                    Date.now() -
                    this.timerStartedAt
                ) / 1000
            )
        );
    },


    setTimerDisplay(seconds) {

        const timer =

            document.getElementById(
                "raceTimer"
            );


        if (!timer) {

            return;
        }


        const minutes =

            Math.floor(
                seconds / 60
            );


        const remainingSeconds =

            seconds % 60;


        timer.textContent =

            `${String(minutes).padStart(
                2,
                "0"
            )}:${String(
                remainingSeconds
            ).padStart(
                2,
                "0"
            )}`;
    },


    /* =====================================================
       LIVE RACE TRACK
    ===================================================== */

    drawRace() {

        if (
            !this.roomData?.players
        ) {

            return;
        }


        const track =

            document.getElementById(
                "raceTrack"
            );


        if (!track) {

            return;
        }


        const players =

            this.sortPlayers(

                Object.values(
                    this.roomData.players
                )

                    .filter(

                        player =>
                            player.approved
                    )
            );


        track.innerHTML =

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
                                    Number(
                                        player.progress
                                    ) || 0
                                )

                                /

                                (
                                    window
                                        .SERVER_HERO_QUESTIONS
                                        ?.length || 14
                                )

                                *

                                90
                            );


                        return `

                            <div class="lane">

                                <div

                                    class="car"

                                    style="
                                        left:${progress}%;
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
       EXPORT CSV
    ===================================================== */

    async csv() {

        if (!this.room) {

            roomStatus.textContent =

                "Buka bilik terlebih dahulu.";

            return;
        }


        const F =

            await this.api();


        const snapshot =

            await F.get(

                F.ref(

                    F.database,

                    `rooms/${this.room}/players`
                )
            );


        const players =

            this.sortPlayers(

                Object.values(
                    snapshot.val() || {}
                )
            );


        const rows = [

            [
                "Rank",
                "Name",
                "ID",
                "Score",
                "XP",
                "Progress",
                "Correct",
                "Wrong",
                "Fast",
                "Status"
            ],

            ...players.map(

                (
                    player,
                    index
                ) => [

                    index + 1,

                    player.name || "",

                    player.id || "",

                    Number(
                        player.score
                    ) || 0,

                    Number(
                        player.xp
                    ) || 0,

                    Number(
                        player.progress
                    ) || 0,

                    Number(
                        player.correctCount
                    ) || 0,

                    Number(
                        player.wrongCount
                    ) || 0,

                    Number(
                        player.fastCount
                    ) || 0,

                    player.status || ""
                ]
            )
        ];


        const csvText =

            rows

                .map(

                    row =>

                        row

                            .map(

                                value =>

                                    `"${String(
                                        value
                                    ).replaceAll(
                                        '"',
                                        '""'
                                    )}"`
                            )

                            .join(",")
                )

                .join("\n");


        const link =

            document.createElement(
                "a"
            );


        link.href =

            URL.createObjectURL(

                new Blob(

                    [csvText],

                    {
                        type:
                            "text/csv;charset=utf-8"
                    }
                )
            );


        link.download =

            `${this.room}-results.csv`;


        document.body.appendChild(
            link
        );


        link.click();

        link.remove();
    },


    /* =====================================================
       FULLSCREEN
    ===================================================== */

    toggleFullscreen() {

        if (
            !document.fullscreenElement
        ) {

            document
                .documentElement
                .requestFullscreen
                ?.();

        } else {

            document
                .exitFullscreen
                ?.();
        }
    }

};


/* =========================================================
   START
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        T.init();
    }
);


window.T = T;
