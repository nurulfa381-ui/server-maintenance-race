const T = {
  room: "",
  roomData: null,

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

  async create() {
    this.room = this.clean(newRoomCode.value);

    if (!this.room || !teacherName.value.trim()) {
      roomStatus.textContent = "Sila isi nama guru dan kod bilik.";
      return;
    }

    const F = await this.api();

    await F.update(
      F.ref(F.database, `rooms/${this.room}`),
      {
        code: this.room,
        teacher: teacherName.value.trim(),
        status: "waiting",
        createdAt: F.serverTimestamp()
      }
    );

    activeRoomTitle.textContent = `Bilik ${this.room}`;
    roomStatus.textContent = `Bilik ${this.room} telah dibuka.`;
    roomStateBadge.textContent = "MENUNGGU";
    roomStateBadge.dataset.state = "waiting";

    this.updateJoinLink();
    this.watch();
  },

  updateJoinLink() {
    if (!this.room) return;

    const base =
      `${location.origin}${location.pathname.replace("teacher.html", "")}`;

    const url =
      `${base}index.html?room=${encodeURIComponent(this.room)}`;

    joinLink.value = url;

    qrPlaceholder.innerHTML = `
      <div class="qr-icon">▦</div>
      <strong>${this.room}</strong>
      <p>Pelajar boleh membuka pautan di bawah. QR automatik akan ditambah dalam patch seterusnya.</p>
    `;
  },

  async watch() {
    const F = await this.api();

    F.onValue(
      F.ref(F.database, `rooms/${this.room}`),
      snapshot => {
        this.roomData = snapshot.val() || {};
        this.render(this.roomData);
      }
    );
  },

  render(data) {
    const players = Object.values(data.players || {});

    const approved = players.filter(player => player.approved);
    const racing = players.filter(player => player.status === "racing");
    const finished = players.filter(player => player.finished);

    const average =
      players.length
        ? Math.round(
            players.reduce(
              (total, player) => total + (Number(player.score) || 0),
              0
            ) / players.length
          )
        : 0;

    totalStudents.textContent = players.length;
    approvedStudents.textContent = approved.length;
    racingStudents.textContent = racing.length;
    finishedStudents.textContent = finished.length;
    averageScore.textContent = average;

    studentCountBadge.textContent =
      `${players.length} pelajar`;

    activeRoomTitle.textContent =
      data.code ? `Bilik ${data.code}` : "Belum ada bilik aktif";

    const stateText = {
      waiting: "MENUNGGU",
      racing: "SEDANG BERLUMBA",
      finished: "TAMAT"
    };

    roomStateBadge.textContent =
      stateText[data.status] || "BELUM DIBUKA";

    roomStateBadge.dataset.state =
      data.status || "idle";

    this.renderStudents(players);
    this.renderLeaderboard(players);
  },

  renderStudents(players) {
    if (!players.length) {
      studentList.className = "student-list empty-state";
      studentList.textContent = "Tiada pelajar dalam bilik.";
      return;
    }

    studentList.className = "student-list";

    studentList.innerHTML = players
      .sort((a, b) => String(a.name).localeCompare(String(b.name)))
      .map((player, index) => `
        <div class="student-row premium-row">
          <b>${index + 1}</b>

          <span class="student-identity">
            <span class="student-avatar">${player.avatar || "👤"}</span>
            <span>
              <strong>${player.name || "-"}</strong>
              <small>${player.id || "-"}</small>
            </span>
          </span>

          <span class="status-pill ${this.statusClass(player)}">
            ${this.statusText(player)}
          </span>

          <strong>${Number(player.score) || 0}</strong>

          <span class="row-actions">
            <button
              type="button"
              onclick="T.approve('${player.key}', ${!player.approved})"
            >
              ${player.approved ? "Batalkan" : "Approve"}
            </button>

            <button
              type="button"
              class="danger"
              onclick="T.remove('${player.key}')"
            >
              Tolak
            </button>
          </span>
        </div>
      `)
      .join("");
  },

  renderLeaderboard(players) {
    const sorted = [...players]
      .filter(player => player.approved)
      .sort(
        (a, b) =>
          (Number(b.score) || 0) - (Number(a.score) || 0) ||
          (Number(a.lastAnswerMs) || 999999) -
            (Number(b.lastAnswerMs) || 999999)
      );

    if (!sorted.length) {
      liveLeaderboard.className = "leaderboard-list empty-state";
      liveLeaderboard.textContent =
        "Leaderboard akan dipaparkan selepas pelajar diluluskan.";
      return;
    }

    liveLeaderboard.className = "leaderboard-list";

    liveLeaderboard.innerHTML = sorted
      .map((player, index) => {
        const medal =
          index === 0
            ? "🥇"
            : index === 1
            ? "🥈"
            : index === 2
            ? "🥉"
            : `#${index + 1}`;

        return `
          <div class="leader-row premium-row">
            <strong>${medal}</strong>

            <span class="student-identity">
              <span class="student-avatar">${player.avatar || "👤"}</span>
              <strong>${player.name || "-"}</strong>
            </span>

            <strong>${Number(player.score) || 0}</strong>

            <span>
              ${Number(player.progress) || 0}/
              ${window.SERVER_HERO_QUESTIONS?.length || 10}
            </span>

            <span class="status-pill ${this.statusClass(player)}">
              ${this.statusText(player)}
            </span>
          </div>
        `;
      })
      .join("");

    leaderboardUpdated.textContent =
      `● LIVE • ${new Date().toLocaleTimeString("ms-MY")}`;
  },

  statusText(player) {
    if (player.finished) return "Tamat";
    if (player.status === "racing") return "Berlumba";
    if (player.approved) return "Diluluskan";
    return "Menunggu";
  },

  statusClass(player) {
    if (player.finished) return "status-finished";
    if (player.status === "racing") return "status-racing";
    if (player.approved) return "status-approved";
    return "status-waiting";
  },

  async approve(key, value) {
    if (!this.room) return;

    const F = await this.api();

    await F.update(
      F.ref(F.database, `rooms/${this.room}/players/${key}`),
      {
        approved: value,
        status: value ? "approved" : "waiting"
      }
    );
  },

  async remove(key) {
    if (!this.room) return;

    const F = await this.api();

    await F.remove(
      F.ref(F.database, `rooms/${this.room}/players/${key}`)
    );
  },

  async approveAll() {
    if (!this.room) return;

    const F = await this.api();

    const snapshot = await F.get(
      F.ref(F.database, `rooms/${this.room}/players`)
    );

    const updates = {};

    Object.keys(snapshot.val() || {}).forEach(key => {
      updates[`${key}/approved`] = true;
      updates[`${key}/status`] = "approved";
    });

    await F.update(
      F.ref(F.database, `rooms/${this.room}/players`),
      updates
    );
  },

  async status(value) {
    if (!this.room) return;

    const F = await this.api();

    await F.update(
      F.ref(F.database, `rooms/${this.room}`),
      {
        status: value,
        startedAt:
          value === "racing"
            ? F.serverTimestamp()
            : this.roomData?.startedAt || null
      }
    );
  },

  async csv() {
    if (!this.room) return;

    const F = await this.api();

    const snapshot = await F.get(
      F.ref(F.database, `rooms/${this.room}/players`)
    );

    const players = Object.values(snapshot.val() || {})
      .sort(
        (a, b) =>
          (Number(b.score) || 0) - (Number(a.score) || 0)
      );

    const rows = [
      ["Rank", "Name", "ID", "Score", "XP", "Progress", "Status"],
      ...players.map((player, index) => [
        index + 1,
        player.name || "",
        player.id || "",
        Number(player.score) || 0,
        Number(player.xp) || 0,
        Number(player.progress) || 0,
        player.status || ""
      ])
    ];

    const csv = rows
      .map(row =>
        row
          .map(value =>
            `"${String(value).replaceAll('"', '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const link = document.createElement("a");

    link.href = URL.createObjectURL(
      new Blob([csv], { type: "text/csv" })
    );

    link.download = `${this.room}-results.csv`;
    link.click();
  },

  copyLink() {
    if (!joinLink.value) return;

    navigator.clipboard
      .writeText(joinLink.value)
      .then(() => {
        copyLinkBtn.textContent = "DISALIN ✓";

        setTimeout(() => {
          copyLinkBtn.textContent = "SALIN PAUTAN";
        }, 1500);
      });
  },

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createRoomBtn.onclick = () => T.create();
  approveAllBtn.onclick = () => T.approveAll();
  startRaceBtn.onclick = () => T.status("racing");
  finishRaceBtn.onclick = () => T.status("finished");
  exportCsvBtn.onclick = () => T.csv();
  copyLinkBtn.onclick = () => T.copyLink();
  fullscreenBtn.onclick = () => T.toggleFullscreen();
});

window.T = T;
