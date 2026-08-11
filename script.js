/* ==========================
   DATA PELAJAR
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

const popupBox =
    document.getElementById("popupBox");

const content =
    document.getElementById("popupContent");

const closeButton =
    document.getElementById("closeButton");


function openPage(page){

    popup.classList.add("show");

    document.body.style.overflow="hidden";

    if(page==="biodata")
        showBiodata();

    else if(page==="guruKelas")
        showGuruKelas();

    else if(page==="ketua")
        showKetua();

    else if(page==="organisasi")
        showOrganisasi();

    else if(page==="pelajar")
        showPelajar();

    else if(page==="vote")
        showVote();

    else if(page==="guru")
        showGuru();

    else if(page==="galeri")
        showGaleri();

    else if(page==="pengumuman")
        showPengumuman();

}


/* ==========================
   TUTUP POPUP
========================== */

closeButton.addEventListener(
    "click",
    closePopup
);


function closePopup(){

    popup.classList.remove("show");

    document.body.style.overflow="auto";

}


popup.addEventListener(
    "click",
    function(e){

        if(e.target===popup){

            closePopup();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function(e){

        if(e.key==="Escape"){

            closePopup();

        }

    }
);


/* ==========================
   KLIK MENU
========================== */

document
.querySelectorAll(".menu-card")
.forEach(card=>{

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

            setTimeout(()=>{

                openPage(
                    this.dataset.page
                );

            },180);

        }
    );

});


/* ==========================
   BIODATA
========================== */

function showBiodata(){

    content.innerHTML=`

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

                <p>Jumlah Pelajar</p>

            </div>


            <div class="info">

                <div class="emoji">🏫</div>

                <h3>DEA3242</h3>

                <p>Kod Sekolah</p>

            </div>

        </div>


        <h3 style="margin:25px 0 15px">
            👥 Senarai Pelajar
        </h3>


        <div class="people">

            ${students.map(
                (student,index)=>`

                <div class="person">

                    <b>
                        ${index+1}.
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

    content.innerHTML=`

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

    content.innerHTML=`

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

    const organization=[

        ["👑","Ketua Kelas","Nama Ketua"],

        ["⭐","Penolong Ketua","Nama Penolong"],

        ["📋","Setiausaha","Nama Setiausaha"],

        ["💰","Bendahari","Nama Bendahari"],

        ["🧹","AJK Kebersihan","Nama AJK"],

        ["📚","AJK Akademik","Nama AJK"]

    ];


    content.innerHTML=`

        <h2 class="title">
            🏫 Organisasi
        </h2>

        <p class="subtitle">
            Organisasi 2 AL-HAMBALI
        </p>


        <div class="info-grid">

            ${organization.map(
                item=>`

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

    content.innerHTML=`

        <h2 class="title">
            👥 Pelajar
        </h2>

        <p class="subtitle">
            29 ahli 2 AL-HAMBALI
        </p>


        <div class="people">

            ${students.map(
                (student,index)=>`

                <div class="person">

                    <b>
                        ${index+1}.
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
   VOTE BEST STUDENT
========================== */

let votes =
    JSON.parse(
        localStorage.getItem(
            "alHambaliVotes"
        )
    ) || {};


let hasVoted =
    localStorage.getItem(
        "alHambaliHasVoted"
    ) === "true";


function showVote(){

    content.innerHTML=`

        <h2 class="title">
            🏆 Best Student
        </h2>

        <p class="subtitle">

            Pilih seorang pelajar terbaik.

            ${
                hasVoted
                ? "Anda sudah mengundi."
                : "Anda boleh mengundi sekali."
            }

        </p>


        <div class="vote-list">

            ${students.map(
                (student,index)=>`

                <div class="vote">

                    <span>
                        ${index+1}.
                        ${student[0]}
                    </span>

                    <button

                        onclick=
                        "voteStudent('${student[0]}')"

                        ${hasVoted?"disabled":""}

                    >

                        ${
                            hasVoted
                            ?"Sudah Undi"
                            :"🗳️ UNDI"
                        }

                    </button>

                </div>

            `).join("")}

        </div>


        <h3 style="margin-top:25px">
            📊 Ranking Semasa
        </h3>

        ${getRanking()}

    `;

}


function voteStudent(name){

    if(hasVoted){

        alert(
            "Anda sudah mengundi!"
        );

        return;

    }


    votes[name] =
        (votes[name] || 0)+1;


    localStorage.setItem(

        "alHambaliVotes",

        JSON.stringify(votes)

    );


    localStorage.setItem(

        "alHambaliHasVoted",

        "true"

    );


    hasVoted=true;


    showVote();

}


function getRanking(){

    return students

        .map(student=>({

            name:student[0],

            votes:
                votes[student[0]] || 0

        }))

        .sort(
            (a,b)=>
                b.votes-a.votes
        )

        .slice(0,5)

        .map((student,index)=>{

            const medal=[
                "🥇",
                "🥈",
                "🥉",
                "4️⃣",
                "5️⃣"
            ][index];


            return`

                <div class="rank">

                    ${medal}

                    <b>
                        ${student.name}
                    </b>

                    —
                    ${student.votes}
                    undi

                </div>

            `;

        })

        .join("");

}


/* ==========================
   GURU & SUBJEK
========================== */

function showGuru(){

    const teachers=[

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


    content.innerHTML=`

        <h2 class="title">
            📚 Guru & Subjek
        </h2>

        <p class="subtitle">
            Guru yang mengajar 2 AL-HAMBALI
        </p>


        <div class="teachers">

            ${teachers.map(
                teacher=>`

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

function showGaleri(){

    content.innerHTML=`

        <h2 class="title">
            📸 Galeri
        </h2>

        <p class="subtitle">
            Kenangan 2 AL-HAMBALI
        </p>


        <div class="gallery">

            <div class="photo">📸</div>

            <div class="photo">🏫</div>

            <div class="photo">👥</div>

            <div class="photo">📚</div>

            <div class="photo">🎉</div>

            <div class="photo">🏆</div>

        </div>

    `;

}


/* ==========================
   PENGUMUMAN
========================== */

function showPengumuman(){

    content.innerHTML=`

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
   DARK / LIGHT MODE
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
