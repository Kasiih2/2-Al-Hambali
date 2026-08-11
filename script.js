import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    runTransaction
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


/* ==========================
   FIREBASE
========================== */

const firebaseConfig = {

    apiKey:
        "AIzaSyDZAHv1GU9YWbV2DfzWxuFgEKLrDR02J48",

    authDomain:
        "al-hambali.firebaseapp.com",

    databaseURL:
        "https://al-hambali-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId:
        "al-hambali",

    storageBucket:
        "al-hambali.firebasestorage.app",

    messagingSenderId:
        "583605425963",

    appId:
        "1:583605425963:web:20c9423cd245096bbed76e"

};


const app =
    initializeApp(firebaseConfig);

const db =
    getDatabase(app);

const auth =
    getAuth(app);


/* LOGIN */

let firebaseReady = false;

signInAnonymously(auth)

    .then(() => {

        firebaseReady = true;

        console.log(
            "Firebase berjaya disambungkan ✅"
        );

    })

    .catch(error => {

        console.error(
            "Firebase authentication error:",
            error
        );

    });


/* ==========================
   PELAJAR
========================== */

const students = [

    ["Jazlan","Lelaki"],
    ["Danish","Lelaki"],
    ["Pelajar 03","Lelaki"],
    ["Pelajar 04","Lelaki"],
    ["Pelajar 05","Lelaki"],
    ["Pelajar 06","Lelaki"],
    ["Pelajar 07","Lelaki"],
    ["Pelajar 08","Lelaki"],
    ["Pelajar 09","Lelaki"],
    ["Pelajar 10","Lelaki"],

    ["Pelajar 11","Perempuan"],
    ["Pelajar 12","Perempuan"],
    ["Pelajar 13","Perempuan"],
    ["Pelajar 14","Perempuan"],
    ["Pelajar 15","Perempuan"],
    ["Pelajar 16","Perempuan"],
    ["Pelajar 17","Perempuan"],
    ["Pelajar 18","Perempuan"],
    ["Pelajar 19","Perempuan"],
    ["Pelajar 20","Perempuan"],
    ["Pelajar 21","Perempuan"],
    ["Pelajar 22","Perempuan"],
    ["Pelajar 23","Perempuan"],
    ["Pelajar 24","Perempuan"],
    ["Pelajar 25","Perempuan"],
    ["Pelajar 26","Perempuan"],
    ["Pelajar 27","Perempuan"],
    ["Pelajar 28","Perempuan"],
    ["Pelajar 29","Perempuan"]

];


/* ==========================
   POPUP
========================== */

const popup =
    document.getElementById("popup");

const content =
    document.getElementById("popupContent");

const closeButton =
    document.getElementById("closeButton");


function openPage(page){

    popup.classList.add("show");

    document.body.style.overflow =
        "hidden";


    if(page === "biodata")
        showBiodata();

    else if(page === "guruKelas")
        showGuruKelas();

    else if(page === "ketua")
        showKetua();

    else if(page === "organisasi")
        showOrganisasi();

    else if(page === "pelajar")
        showPelajar();

    else if(page === "vote")
        showVote();

    else if(page === "guru")
        showGuru();

    else if(page === "galeri")
        showGaleri();

    else if(page === "pengumuman")
        showPengumuman();

}


function closePopup(){

    popup.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


closeButton.addEventListener(
    "click",
    closePopup
);


popup.addEventListener(
    "click",
    event => {

        if(event.target === popup){

            closePopup();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if(event.key === "Escape"){

            closePopup();

        }

    }
);


/* ==========================
   MENU
========================== */

document
.querySelectorAll(".menu-card")
.forEach(card => {

    card.addEventListener(
        "click",
        function(){

            this.classList.remove(
                "clicked"
            );

            void this.offsetWidth;

            this.classList.add(
                "clicked"
            );

            setTimeout(
                () => {

                    openPage(
                        this.dataset.page
                    );

                },
                180
            );

        }
    );

});


/* ==========================
   BIODATA
========================== */

function showBiodata(){

    content.innerHTML = `

        <h2 class="title">
            📋 Biodata Kelas
        </h2>

        <p class="subtitle">
            2 AL-HAMBALI • SMK Meranti
        </p>

        <div class="info-grid">

            <div class="info">

                <div class="emoji">
                    👥
                </div>

                <h3>
                    29
                </h3>

                <p>
                    Jumlah Pelajar
                </p>

            </div>

            <div class="info">

                <div class="emoji">
                    🏫
                </div>

                <h3>
                    DEA3242
                </h3>

                <p>
                    Kod Sekolah
                </p>

            </div>

        </div>

        <h3 style="margin:25px 0 15px">
            👥 Senarai Pelajar
        </h3>

        <div class="people">

            ${students.map(
                (student,index) => `

                <div class="person">

                    <b>
                        ${index + 1}.
                        ${student[0]}
                    </b>

                    <small>
                        ${student[1]}
                    </small>

                </div>

            `).join("")}

        </div>

    `;

}


/* ==========================
   GURU KELAS
========================== */

function showGuruKelas(){

    content.innerHTML = `

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


/* ==========================
   KETUA
========================== */

function showKetua(){

    content.innerHTML = `

        <h2 class="title">
            👑 Ketua Kelas
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


/* ==========================
   ORGANISASI
========================== */

function showOrganisasi(){

    const organization = [

        ["👑","Ketua Kelas","Nama Ketua"],

        ["⭐","Penolong Ketua","Nama Penolong"],

        ["📋","Setiausaha","Nama Setiausaha"],

        ["💰","Bendahari","Nama Bendahari"],

        ["🧹","AJK Kebersihan","Nama AJK"],

        ["📚","AJK Akademik","Nama AJK"]

    ];


    content.innerHTML = `

        <h2 class="title">
            🏫 Organisasi
        </h2>

        <p class="subtitle">
            Organisasi 2 AL-HAMBALI
        </p>

        <div class="info-grid">

            ${organization.map(
                item => `

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


/* ==========================
   PELAJAR
========================== */

function showPelajar(){

    content.innerHTML = `

        <h2 class="title">
            👥 Pelajar
        </h2>

        <p class="subtitle">
            29 ahli 2 AL-HAMBALI
        </p>

        <div class="people">

            ${students.map(
                (student,index) => `

                <div class="person">

                    <b>
                        ${index + 1}.
                        ${student[0]}
                    </b>

                    <small>
                        ${student[1]}
                    </small>

                </div>

            `).join("")}

        </div>

    `;

}


/* ==========================
   BEST STUDENT
========================== */


/*
   SEMUA UNDIAN DISIMPAN DI:

   bestStudentVotes
*/


const votesRef =
    ref(db,"bestStudentVotes");


let currentVotes = {};


/* LIVE UPDATE */

onValue(
    votesRef,
    snapshot => {

        currentVotes =
            snapshot.val() || {};

        if(
            popup.classList.contains("show")
        ){

            const votePage =
                content.querySelector(
                    ".vote-list"
                );

            if(votePage){

                showVote();

            }

        }

    }
);


/* PAPAR VOTE */

function showVote(){

    content.innerHTML = `

        <h2 class="title">
            🏆 Best Student
        </h2>

        <p class="subtitle">

            Undian dikongsi secara
            langsung untuk semua pengguna.

        </p>

        <div class="vote-list">

            ${students.map(
                (student,index) => {

                    const name =
                        student[0];

                    const count =
                        currentVotes[name] || 0;

                    return `

                        <div class="vote">

                            <span>

                                ${index + 1}.
                                ${name}

                                <br>

                                <small
                                    style="color:#94a3b8"
                                >
                                    ${count}
                                    undi
                                </small>

                            </span>

                            <button
                                class="vote-button"
                                data-name="${name}"
                            >

                                🗳️ UNDI

                            </button>

                        </div>

                    `;

                }
            ).join("")}

        </div>

        <h3 style="margin-top:25px">
            📊 Ranking Semasa
        </h3>

        ${getRanking()}

    `;


    document
    .querySelectorAll(".vote-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                voteStudent(
                    button.dataset.name
                );

            }
        );

    });

}


/* ==========================
   VOTE FIREBASE
========================== */

async function voteStudent(name){

    if(!firebaseReady){

        alert(
            "Firebase masih disambungkan. Cuba lagi sebentar."
        );

        return;

    }


    const studentRef =
        ref(
            db,
            "bestStudentVotes/" +
            encodeURIComponent(name)
        );


    try{

        await runTransaction(
            studentRef,
            current => {

                return (
                    (current || 0) + 1
                );

            }
        );


        alert(
            "Undian berjaya! 🏆"
        );

    }

    catch(error){

        console.error(error);

        alert(
            "Undian gagal. Sila cuba lagi."
        );

    }

}


/* ==========================
   RANKING
========================== */

function getRanking(){

    return students

        .map(student => ({

            name:
                student[0],

            votes:
                currentVotes[
                    student[0]
                ] || 0

        }))

        .sort(
            (a,b) =>
                b.votes - a.votes
        )

        .slice(0,5)

        .map(
            (student,index) => {

                const medals = [

                    "🥇",
                    "🥈",
                    "🥉",
                    "4️⃣",
                    "5️⃣"

                ];


                return `

                    <div class="rank">

                        ${medals[index]}

                        <b>
                            ${student.name}
                        </b>

                        —

                        ${student.votes}
                        undi

                    </div>

                `;

            }
        )

        .join("");

}


/* ==========================
   GURU & SUBJEK
========================== */

function showGuru(){

    const teachers = [

        ["NAMA GURU KELAS","Guru Kelas"],

        ["NAMA CIKGU 1","Bahasa Melayu"],

        ["NAMA CIKGU 2","Bahasa Inggeris"],

        ["NAMA CIKGU 3","Matematik"],

        ["NAMA CIKGU 4","Sains"],

        ["NAMA CIKGU 5","Sejarah"],

        ["NAMA CIKGU 6","Geografi"],

        ["NAMA CIKGU 7","Pendidikan Islam"],

        ["NAMA CIKGU 8","RBT"]

    ];


    content.innerHTML = `

        <h2 class="title">
            📚 Guru & Subjek
        </h2>

        <p class="subtitle">
            Guru yang mengajar 2 AL-HAMBALI
        </p>

        <div class="teachers">

            ${teachers.map(
                teacher => `

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


/* ==========================
   GALERI
========================== */

const galleryData = [

    {
        icon:"🌙",
        title:"Sambutan Raya Aidilfitri",
        description:
            "Kenangan warga 2 AL-HAMBALI sempena sambutan Hari Raya Aidilfitri."
    },

    {
        icon:"🏫",
        title:"Aktiviti Kelas",
        description:
            "Aktiviti bersama rakan-rakan dan guru di dalam kelas."
    },

    {
        icon:"👥",
        title:"Kenangan Bersama",
        description:
            "Momen bersama 29 orang pelajar 2 AL-HAMBALI."
    },

    {
        icon:"📚",
        title:"Aktiviti Akademik",
        description:
            "Aktiviti pembelajaran dan kerja berkumpulan."
    },

    {
        icon:"🎉",
        title:"Sambutan Hari Guru",
        description:
            "Kenangan istimewa bersama guru-guru yang mengajar."
    },

    {
        icon:"🏆",
        title:"Aktiviti Sekolah",
        description:
            "Penglibatan pelajar dalam aktiviti dan program sekolah."
    }

];


function showGaleri(){

    content.innerHTML = `

        <h2 class="title">
            📸 Galeri Kenangan
        </h2>

        <p class="subtitle">
            Tekan gambar untuk melihat lebih besar
        </p>

        <div class="gallery">

            ${galleryData.map(
                (item,index) => `

                <button
                    class="gallery-card"
                    onclick="openGallery(${index})"
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

}


window.openGallery =
function(index){

    const item =
        galleryData[index];

    content.innerHTML = `

        <div class="big-photo">

            <div class="big-photo-image">

                <span>
                    ${item.icon}
                </span>

            </div>

            <h2
                class="title"
                style="margin-top:20px"
            >

                ${item.title}

            </h2>

            <p class="subtitle">

                ${item.description}

            </p>

            <button
                class="back-gallery"
                onclick="showGaleri()"
            >

                ← Kembali ke Galeri

            </button>

        </div>

    `;

};


/* ==========================
   PENGUMUMAN
========================== */

function showPengumuman(){

    content.innerHTML = `

        <h2 class="title">
            📢 Pengumuman
        </h2>

        <p class="subtitle">
            Maklumat terkini kelas
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
                rasmi kelas 2 AL-HAMBALI.
            </p>

        </div>

    `;

}


/* ==========================
   MODE
========================== */

document
.getElementById("modeButton")
.addEventListener(
    "click",
    function(){

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
