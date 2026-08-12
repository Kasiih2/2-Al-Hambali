import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    runTransaction,
    set
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


/* =========================
   FIREBASE
========================= */

const firebaseConfig = {
    apiKey: "AIzaSyDZAHv1GU9YWbV2DfzWxuFgEKLrDR02J48",
    authDomain: "al-hambali.firebaseapp.com",
    databaseURL: "https://al-hambali-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "al-hambali",
    storageBucket: "al-hambali.firebasestorage.app",
    messagingSenderId: "583605425963",
    appId: "1:583605425963:web:20c9423cd245096bbed76e"
};


let db = null;
let auth = null;
let currentUser = null;
let firebaseReady = false;

let currentVotes = {};
let currentUserVote = null;


/* =========================
   START FIREBASE
========================= */

try {

    const app = initializeApp(firebaseConfig);

    db = getDatabase(app);

    auth = getAuth(app);

    signInAnonymously(auth)
        .then(result => {

            currentUser = result.user;

            firebaseReady = true;

            console.log("Firebase OK");

            loadMyVote();
            listenVotes();

        })
        .catch(error => {

            console.error("Firebase login error:", error);

        });

}
catch(error) {

    console.error("Firebase error:", error);

}


/* =========================
   POPUP
========================= */

const popup = document.getElementById("popup");
const popupBox = document.getElementById("popupBox");
const popupContent = document.getElementById("popupContent");
const closeButton = document.getElementById("closeButton");


function openPopup() {

    popup.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closePopup() {

    popup.classList.remove("show");

    document.body.style.overflow = "auto";

}


closeButton.addEventListener("click", closePopup);


popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        closePopup();

    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePopup();

    }

});


/* =========================
   MENU BUTTON
========================= */

document.querySelectorAll(".menu-card").forEach(card => {

    card.addEventListener("click", function() {

        this.classList.add("clicked");

        setTimeout(() => {

            this.classList.remove("clicked");

        }, 450);


        openPopup();

        openPage(this.dataset.page);

    });

});


/* =========================
   STUDENTS
========================= */

const students = [

    ["Jazlan", "Lelaki"],
    ["Danish", "Lelaki"],
    ["Haziq", "Lelaki"],
    ["Habib", "Lelaki"],
    ["Qayyum", "Lelaki"],
    ["Razif", "Lelaki"],
    ["Aqwa", "Lelaki"],
    ["Asyraf", "Lelaki"],
    ["Mizzani", "Lelaki"],
    ["Naufal", "Lelaki"],

    ["Arifah", "Perempuan"],
    ["Aqilah", "Perempuan"],
    ["Syifa", "Perempuan"],
    ["Dhiya", "Perempuan"],
    ["Qai", "Perempuan"],
    ["Qaisara", "Perempuan"],
    ["Humaira", "Perempuan"],
    ["Raisah", "Perempuan"],
    ["Amirah", "Perempuan"],
    ["Adrisha", "Perempuan"],
    ["Iman", "Perempuan"],
    ["Damia", "Perempuan"],
    ["Alia", "Perempuan"],
    ["Fathiah", "Perempuan"],
    ["Ardini", "Perempuan"],
    ["Syaqiela", "Perempuan"],
    ["Hajar", "Perempuan"],
    ["Qisya", "Perempuan"],
    ["Amanda", "Perempuan"]

];


/* =========================
   PAGE
========================= */

function openPage(page) {

    if (page === "biodata") {
        showBiodata();
    }

    else if (page === "guruKelas") {
        showGuruKelas();
    }

    else if (page === "ketua") {
        showKetua();
    }

    else if (page === "organisasi") {
        showOrganisasi();
    }

    else if (page === "pelajar") {
        showPelajar();
    }

    else if (page === "vote") {
        showVote();
    }

    else if (page === "guru") {
        showGuru();
    }

    else if (page === "galeri") {
        showGaleri();
    }

    else if (page === "pengumuman") {
        showPengumuman();
    }

}


/* =========================
   BIODATA
========================= */

function showBiodata() {

    popupContent.innerHTML = `

        <h2 class="title">📋 Biodata Kelas</h2>

        <p class="subtitle">
            2 AL-HAMBALI • SMK Meranti
        </p>

        <div class="info-grid">

            <div class="info">

                <div class="emoji">👥</div>

                <h3>29</h3>

                <p>Jumlah Pelajar</p>

            </div>

            <div class="info">

                <div class="emoji">🏫</div>

                <h3>DEA3242</h3>

                <p>Kod Sekolah</p>

            </div>

        </div>

        <h3 style="margin:25px 0 15px">
            👥 Pelajar
        </h3>

        <div class="people">

            ${students.map((student, index) => `

                <div class="person">

                    <b>
                        ${index + 1}. ${student[0]}
                    </b>

                    <small>
                        ${student[1]}
                    </small>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================
   GURU KELAS
========================= */

function showGuruKelas() {

    popupContent.innerHTML = `

        <h2 class="title">
            👨‍🏫 Guru Kelas
        </h2>

        <p class="subtitle">
            Guru kelas 2 AL-HAMBALI
        </p>

        <div class="info">

            <div class="emoji">
                👨‍🏫
            </div>

            <h3>
                NAMA GURU KELAS
            </h3>

            <p>
                Guru Kelas 2 AL-HAMBALI
            </p>

        </div>

    `;

}


/* =========================
   KETUA
========================= */

function showKetua() {

    popupContent.innerHTML = `

        <h2 class="title">
            👑 Ketua & Penolong
        </h2>

        <p class="subtitle">
            Kepimpinan kelas
        </p>

        <div class="info-grid">

            <div class="info">

                <div class="emoji">
                    👑
                </div>

                <h3>
                    Ketua Kelas
                </h3>

                <p>
                    Nama Ketua
                </p>

            </div>

            <div class="info">

                <div class="emoji">
                    ⭐
                </div>

                <h3>
                    Penolong Ketua
                </h3>

                <p>
                    Nama Penolong
                </p>

            </div>

        </div>

    `;

}


/* =========================
   ORGANISASI
========================= */

function showOrganisasi() {

    const data = [

        ["👑", "Ketua Kelas", "Nama Ketua"],
        ["⭐", "Penolong Ketua", "Nama Penolong"],
        ["📋", "Setiausaha", "Nama Setiausaha"],
        ["💰", "Bendahari", "Nama Bendahari"],
        ["🧹", "AJK Kebersihan", "Nama AJK"],
        ["📚", "AJK Akademik", "Nama AJK"]

    ];


    popupContent.innerHTML = `

        <h2 class="title">
            🏫 Organisasi
        </h2>

        <p class="subtitle">
            Organisasi kelas 2 AL-HAMBALI
        </p>

        <div class="info-grid">

            ${data.map(item => `

                <div class="info">

                    <div class="emoji">
                        ${item[0]}
                    </div>

                    <h3>
                        ${item[1]}
                    </h3>

                    <p>
                        ${item[2]}
                    </p>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================
   PELAJAR
========================= */

function showPelajar() {

    popupContent.innerHTML = `

        <h2 class="title">
            👥 Pelajar
        </h2>

        <p class="subtitle">
            29 orang pelajar
        </p>

        <div class="people">

            ${students.map((student, index) => `

                <div class="person">

                    <b>
                        ${index + 1}. ${student[0]}
                    </b>

                    <small>
                        ${student[1]}
                    </small>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================
   FIREBASE VOTES
========================= */

function listenVotes() {

    if (!db) return;

    const voteRef =
        ref(db, "bestStudentVotes");

    onValue(voteRef, snapshot => {

        currentVotes =
            snapshot.val() || {};

        if (
            popup.classList.contains("show") &&
            popupContent.querySelector(".vote-list")
        ) {

            showVote();

        }

    });

}


function loadMyVote() {

    if (!db || !currentUser) return;

    const myRef =
        ref(
            db,
            "studentVotes/" +
            currentUser.uid
        );

    onValue(myRef, snapshot => {

        if (snapshot.exists()) {

            currentUserVote =
                snapshot.val().student;

        }

        else {

            currentUserVote = null;

        }

        if (
            popup.classList.contains("show") &&
            popupContent.querySelector(".vote-list")
        ) {

            showVote();

        }

    });

}


/* =========================
   VOTE PAGE
========================= */

function showVote() {

    const hasVoted =
        currentUserVote !== null;


    popupContent.innerHTML = `

        <h2 class="title">
            🏆 Best Student
        </h2>

        <p class="subtitle">
            Pilih seorang pelajar terbaik.
        </p>

        ${
            hasVoted
            ?
            `
            <div class="my-vote">

                ✅
                <b>
                    Anda sudah mengundi.
                </b>

                <br><br>

                Pilihan anda:

                <strong>
                    ${currentUserVote}
                </strong>

            </div>
            `
            :
            `
            <div class="my-vote">

                🗳️
                <b>
                    Anda hanya boleh vote sekali.
                </b>

            </div>
            `
        }


        <div class="vote-list">

            ${students.map((student, index) => {

                const name =
                    student[0];

                const votes =
                    currentVotes[name] || 0;


                return `

                    <div class="vote">

                        <span>

                            <b>
                                ${index + 1}.
                                ${name}
                            </b>

                            <br>

                            <small>
                                ${votes} undi
                            </small>

                        </span>

                        <button
                            class="vote-button"
                            data-name="${name}"
                            ${hasVoted ? "disabled" : ""}
                        >

                            ${hasVoted
                                ? "✓"
                                : "🗳️ UNDI"}

                        </button>

                    </div>

                `;

            }).join("")}

        </div>


        <h3 style="margin-top:25px">
            📊 Ranking
        </h3>

        ${getRanking()}

    `;


    if (!hasVoted) {

        document
        .querySelectorAll(".vote-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    voteStudent(
                        this.dataset.name
                    );

                }
            );

        });

    }

}


/* =========================
   VOTE
========================= */

async function voteStudent(name) {

    if (!firebaseReady) {

        alert(
            "Firebase belum siap.\n\n" +
            "Cuba tunggu beberapa saat."
        );

        return;

    }


    if (currentUserVote) {

        alert(
            "❌ Anda sudah mengundi!"
        );

        return;

    }


    try {

        const uid =
            currentUser.uid;


        const myVoteRef =
            ref(
                db,
                "studentVotes/" +
                uid
            );


        const studentRef =
            ref(
                db,
                "bestStudentVotes/" +
                encodeURIComponent(name)
            );


        await set(
            myVoteRef,
            {
                student: name,
                timestamp: Date.now()
            }
        );


        await runTransaction(
            studentRef,
            value => {

                return (value || 0) + 1;

            }
        );


        currentUserVote = name;


        alert(
            "✅ Undian berjaya!"
        );


        showVote();

    }

    catch(error) {

        console.error(error);

        alert(
            "❌ Gagal mengundi:\n\n" +
            error.message
        );

    }

}


/* =========================
   RANKING
========================= */

function getRanking() {

    return students

        .map(student => ({

            name: student[0],

            votes:
                currentVotes[student[0]] || 0

        }))

        .sort(
            (a, b) =>
                b.votes - a.votes
        )

        .slice(0, 5)

        .map((student, index) => {

            const medal = [
                "🥇",
                "🥈",
                "🥉",
                "4️⃣",
                "5️⃣"
            ][index];


            return `

                <div class="rank">

                    ${medal}

                    <b>
                        ${student.name}
                    </b>

                    — ${student.votes} undi

                </div>

            `;

        })
        .join("");

}


/* =========================
   GURU & SUBJEK
========================= */

function showGuru() {

    const teachers = [

        ["NAMA GURU KELAS", "Guru Kelas"],
        ["NAMA CIKGU 1", "Bahasa Melayu"],
        ["NAMA CIKGU 2", "Bahasa Inggeris"],
        ["NAMA CIKGU 3", "Matematik"],
        ["NAMA CIKGU 4", "Sains"],
        ["NAMA CIKGU 5", "Sejarah"],
        ["NAMA CIKGU 6", "Geografi"],
        ["NAMA CIKGU 7", "Pendidikan Islam"],
        ["NAMA CIKGU 8", "RBT"]

    ];


    popupContent.innerHTML = `

        <h2 class="title">
            📚 Guru & Subjek
        </h2>

        <p class="subtitle">
            Guru yang mengajar 2 AL-HAMBALI
        </p>

        <div class="teachers">

            ${teachers.map(teacher => `

                <div class="teacher">

                    <div class="teacher-icon">
                        👨‍🏫
                    </div>

                    <h3>
                        ${teacher[0]}
                    </h3>

                    <p>
                        📖 ${teacher[1]}
                    </p>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================
   GALERI
========================= */

const galleryData = [

    {
        icon: "🌙",
        title: "Sambutan Raya Aidilfitri",
        description:
            "Kenangan 2 AL-HAMBALI sempena sambutan Hari Raya Aidilfitri."
    },

    {
        icon: "🏫",
        title: "Aktiviti Kelas",
        description:
            "Aktiviti bersama rakan-rakan dan guru."
    },

    {
        icon: "👥",
        title: "Kenangan Bersama",
        description:
            "Momen bersama 29 orang pelajar."
    },

    {
        icon: "📚",
        title: "Aktiviti Akademik",
        description:
            "Aktiviti pembelajaran dan kerja berkumpulan."
    },

    {
        icon: "🎉",
        title: "Sambutan Hari Guru",
        description:
            "Kenangan bersama guru-guru."
    },

    {
        icon: "🏆",
        title: "Aktiviti Sekolah",
        description:
            "Penglibatan pelajar dalam program sekolah."
    }

];


function showGaleri() {

    popupContent.innerHTML = `

        <h2 class="title">
            📸 Galeri Kenangan
        </h2>

        <p class="subtitle">
            Tekan gambar untuk besarkan.
        </p>

        <div class="gallery">

            ${galleryData.map((item, index) => `

                <button
                    class="gallery-card"
                    data-gallery="${index}"
                >

                    <div class="gallery-image">

                        <span>
                            ${item.icon}
                        </span>

                        <div class="zoom">
                            🔍
                        </div>

                    </div>

                    <div class="gallery-info">

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                    </div>

                </button>

            `).join("")}

        </div>

    `;


    document
    .querySelectorAll(".gallery-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            function() {

                openGallery(
                    Number(
                        this.dataset.gallery
                    )
                );

            }
        );

    });

}


function openGallery(index) {

    const item =
        galleryData[index];


    popupContent.innerHTML = `

        <div class="big-photo-image">

            <span>
                ${item.icon}
            </span>

        </div>

        <h2 class="title" style="margin-top:20px">

            ${item.title}

        </h2>

        <p class="subtitle">

            ${item.description}

        </p>

        <button
            class="back-gallery"
            id="backGallery"
        >

            ← Kembali

        </button>

    `;


    document
    .getElementById("backGallery")
    .addEventListener(
        "click",
        showGaleri
    );

}


/* =========================
   PENGUMUMAN
========================= */

function showPengumuman() {

    popupContent.innerHTML = `

        <h2 class="title">
            📢 Pengumuman
        </h2>

        <p class="subtitle">
            Maklumat kelas
        </p>

        <div class="info">

            <div class="emoji">
                🎉
            </div>

            <h3>
                Selamat Datang!
            </h3>

            <p>
                Selamat datang ke portal
                rasmi 2 AL-HAMBALI.
            </p>

        </div>

    `;

}


/* =========================
   DARK MODE
========================= */

const modeButton =
    document.getElementById("modeButton");


modeButton.addEventListener(
    "click",
    function() {

        document.body
        .classList
        .toggle("light");


        this.textContent =
            document.body
            .classList
            .contains("light")
            ? "☀️"
            : "🌙";

    }
);
