import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

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


/* =================================
   FIREBASE
================================= */

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


let firebaseReady = false;

let currentUser = null;

let currentVotes = {};

let currentUserVote = null;


/* =================================
   FIREBASE LOGIN
================================= */

signInAnonymously(auth)

.then(result => {

    currentUser =
        result.user;

    firebaseReady = true;

    console.log(
        "Firebase connected ✅"
    );

    loadMyVote();

})

.catch(error => {

    console.error(
        "Firebase error:",
        error
    );

    alert(
        "Firebase gagal disambungkan.\n\n" +
        error.message
    );

});


/* =================================
   PELAJAR
================================= */

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


/* =================================
   POPUP
================================= */

const popup =
    document.getElementById("popup");

const popupContent =
    document.getElementById("popupContent");

const closeButton =
    document.getElementById("closeButton");


function closePopup(){

    popup.classList.remove(
        "show"
    );

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


/* =================================
   MENU
================================= */

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


function openPage(page){

    popup.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";


    if(page === "biodata")
        showBiodata();

    if(page === "guruKelas")
        showGuruKelas();

    if(page === "ketua")
        showKetua();

    if(page === "organisasi")
        showOrganisasi();

    if(page === "pelajar")
        showPelajar();

    if(page === "vote")
        showVote();

    if(page === "guru")
        showGuru();

    if(page === "galeri")
        showGaleri();

    if(page === "pengumuman")
        showPengumuman();

}


/* =================================
   BIODATA
================================= */

function showBiodata(){

    popupContent.innerHTML = `

        <h2 class="title">
            📋 Biodata Kelas
        </h2>

        <p class="subtitle">
            2 AL-HAMBALI • SMK Meranti
        </p>

        <div class="info-grid">

            <div class="info">

                <div class="emoji">👥</div>

                <h3>29</h3>

                <p>
                    Jumlah Pelajar
                </p>

            </div>


            <div class="info">

                <div class="emoji">🏫</div>

                <h3>DEA3242</h3>

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


/* =================================
   GURU KELAS
================================= */

function showGuruKelas(){

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


/* =================================
   KETUA
================================= */

function showKetua(){

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


/* =================================
   ORGANISASI
================================= */

function showOrganisasi(){

    const organization = [

        ["👑","Ketua Kelas","Nama Ketua"],

        ["⭐","Penolong Ketua","Nama Penolong"],

        ["📋","Setiausaha","Nama Setiausaha"],

        ["💰","Bendahari","Nama Bendahari"],

        ["🧹","AJK Kebersihan","Nama AJK"],

        ["📚","AJK Akademik","Nama AJK"]

    ];


    popupContent.innerHTML = `

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


/* =================================
   PELAJAR
================================= */

function showPelajar(){

    popupContent.innerHTML = `

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


/* =================================
   LOAD VOTES
================================= */

const votesRef =
    ref(
        db,
        "bestStudentVotes"
    );


onValue(
    votesRef,
    snapshot => {

        currentVotes =
            snapshot.val() || {};

        if(
            popup.classList.contains(
                "show"
            )
        ){

            if(
                popupContent.querySelector(
                    ".vote-list"
                )
            ){

                showVote();

            }

        }

    }
);


/* =================================
   LOAD USER VOTE
================================= */

function loadMyVote(){

    if(!currentUser)
        return;


    const myVoteRef =
        ref(
            db,
            "studentVotes/" +
            currentUser.uid
        );


    onValue(
        myVoteRef,
        snapshot => {

            if(snapshot.exists()){

                currentUserVote =
                    snapshot.val().student;

            }

            else{

                currentUserVote =
                    null;

            }

            if(
                popupContent.querySelector(
                    ".vote-list"
                )
            ){

                showVote();

            }

        }
    );

}


/* =================================
   SHOW VOTE
================================= */

function showVote(){

    const hasVoted =
        currentUserVote !== null;


    popupContent.innerHTML = `

        <h2 class="title">
            🏆 Best Student
        </h2>

        <p class="subtitle">
            Setiap pengguna hanya boleh
            mengundi sekali.
        </p>


        ${
            hasVoted

            ?

            `
            <div class="my-vote">

                ✅ <b>Undian anda telah direkodkan.</b>

                <br><br>

                Anda memilih:

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
                    Pilih seorang pelajar sahaja.
                </b>

            </div>
            `

        }


        <div class="vote-list">

            ${students.map(
                (student,index) => {

                    const name =
                        student[0];

                    const count =
                        currentVotes[
                            name
                        ] || 0;


                    return `

                        <div class="vote">

                            <span>

                                <b>
                                    ${index + 1}.
                                    ${name}
                                </b>

                                <br>

                                <small
                                    style="
                                    color:#94a3b8"
                                >
                                    ${count}
                                    undi
                                </small>

                            </span>


                            <button

                                class="vote-button"

                                data-name="${name}"

                                ${
                                    hasVoted
                                    ? "disabled"
                                    : ""
                                }

                            >

                                ${
                                    hasVoted
                                    ? "✓"
                                    : "🗳️ UNDI"
                                }

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


    if(!hasVoted){

        document
        .querySelectorAll(
            ".vote-button"
        )
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

}


/* =================================
   VOTE
================================= */

async function voteStudent(name){

    if(!firebaseReady){

        alert(
            "Firebase belum siap. Cuba lagi."
        );

        return;

    }


    if(!currentUser){

        alert(
            "Akaun pengguna belum siap."
        );

        return;

    }


    if(currentUserVote){

        alert(
            "❌ Anda sudah mengundi!"
        );

        return;

    }


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


    try{

        /*
        Simpan siapa yang pengguna pilih.
        */

        await set(
            myVoteRef,
            {

                student:name,

                timestamp:
                    Date.now()

            }
        );


        /*
        Tambah jumlah undi.
        */

        await runTransaction(
            studentRef,
            current => {

                return (
                    (current || 0) + 1
                );

            }
        );


        currentUserVote =
            name;


        showVote();


        alert(
            "✅ Undian berjaya!"
        );

    }

    catch(error){

        console.error(
            error
        );

        alert(
            "❌ Undian gagal.\n\n" +
            error.message
        );

    }

}


/* =================================
   RANKING
================================= */

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


/* =================================
   GURU & SUBJEK
================================= */

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


    popupContent.innerHTML = `

        <h2 class="title">
            📚 Guru & Subjek
        </h2>

        <p class="subtitle">
            Guru yang mengajar
            2 AL-HAMBALI
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


/* =================================
   GALERI
================================= */

const galleryData = [

    {
        icon:"🌙",

        title:
            "Sambutan Raya Aidilfitri",

        description:
            "Kenangan warga 2 AL-HAMBALI sempena sambutan Hari Raya Aidilfitri."

    },

    {
        icon:"🏫",

        title:
            "Aktiviti Kelas",

        description:
            "Aktiviti bersama rakan-rakan dan guru."

    },

    {
        icon:"👥",

        title:
            "Kenangan Bersama",

        description:
            "Momen bersama 29 orang pelajar."

    },

    {
        icon:"📚",

        title:
            "Aktiviti Akademik",

        description:
            "Aktiviti pembelajaran dan kerja berkumpulan."

    },

    {
        icon:"🎉",

        title:
            "Sambutan Hari Guru",

        description:
            "Kenangan bersama guru-guru."

    },

    {
        icon:"🏆",

        title:
            "Aktiviti Sekolah",

        description:
            "Penglibatan pelajar dalam program sekolah."

    }

];


function showGaleri(){

    popupContent.innerHTML = `

        <h2 class="title">
            📸 Galeri Kenangan
        </h2>

        <p class="subtitle">
            Tekan gambar untuk besarkan
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


    popupContent.innerHTML = `

        <div class="big-photo">

            <div class="big-photo-image">

                <span>
                    ${item.ico
                </span>

            </div>


            <h2
                class="title"
                style="margin-top:20px"
            >

                ${item.title}
