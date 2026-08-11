const students = [
"Jazlan","Danish","Pelajar 03","Pelajar 04","Pelajar 05",
"Pelajar 06","Pelajar 07","Pelajar 08","Pelajar 09","Pelajar 10",
"Pelajar 11","Pelajar 12","Pelajar 13","Pelajar 14","Pelajar 15",
"Pelajar 16","Pelajar 17","Pelajar 18","Pelajar 19","Pelajar 20",
"Pelajar 21","Pelajar 22","Pelajar 23","Pelajar 24","Pelajar 25",
"Pelajar 26","Pelajar 27","Pelajar 28","Pelajar 29"
];

const popup=document.getElementById("popup");
const content=document.getElementById("content");
const close=document.getElementById("close");

function openPage(page){
    popup.classList.add("show");

    if(page==="biodata") biodata();
    if(page==="guruKelas") guruKelas();
    if(page==="ketua") ketua();
    if(page==="organisasi") organisasi();
    if(page==="pelajar") pelajar();
    if(page==="vote") votePage();
    if(page==="guru") guru();
    if(page==="galeri") galeri();
    if(page==="pengumuman") pengumuman();
}

close.onclick=()=>{
    popup.classList.remove("show");
};

popup.onclick=e=>{
    if(e.target===popup) popup.classList.remove("show");
};


/* TEKAN LAMA */

document.querySelectorAll(".tile").forEach(tile=>{

    let timer;

    const start=e=>{
        e.preventDefault();

        tile.classList.add("holding");

        timer=setTimeout(()=>{
            tile.classList.remove("holding");
            openPage(tile.dataset.open);
        },650);
    };

    const stop=()=>{
        clearTimeout(timer);
        tile.classList.remove("holding");
    };

    tile.addEventListener("mousedown",start);
    tile.addEventListener("mouseup",stop);
    tile.addEventListener("mouseleave",stop);

    tile.addEventListener("touchstart",start,{passive:false});
    tile.addEventListener("touchend",stop);
    tile.addEventListener("touchcancel",stop);
});


/* BIODATA */

function biodata(){

    content.innerHTML=`

    <h2 class="title">📋 Biodata Kelas</h2>
    <p class="subtitle">
        2 AL-HAMBALI • 29 pelajar • 10 lelaki • 19 perempuan
    </p>

    <div class="people">

    ${students.map((name,i)=>`

        <div class="person">
            <b>${i+1}. ${name}</b>
            <small>
                ${i<10 ? "Lelaki" : "Perempuan"}
            </small>
        </div>

    `).join("")}

    </div>
    `;
}


/* GURU KELAS */

function guruKelas(){

    content.innerHTML=`

    <h2 class="title">👨‍🏫 Guru Kelas</h2>

    <p class="subtitle">
        Guru kelas 2 AL-HAMBALI
    </p>

    <div class="info">

        <div class="emoji">👨‍🏫</div>

        <h3>NAMA GURU KELAS</h3>

        <p>Guru Kelas 2 AL-HAMBALI</p>

    </div>

    `;
}


/* KETUA */

function ketua(){

    content.innerHTML=`

    <h2 class="title">👑 Ketua Kelas</h2>

    <p class="subtitle">
        Kepimpinan 2 AL-HAMBALI
    </p>

    <div class="info-grid">

        <div class="info">
            <div class="emoji">👑</div>
            <h3>Ketua Kelas</h3>
            <p>Nama Ketua</p>
        </div>

        <div class="info">
            <div class="emoji">⭐</div>
            <h3>Penolong Ketua</h3>
            <p>Nama Penolong</p>
        </div>

    </div>
    `;
}


/* ORGANISASI */

function organisasi(){

    const data=[
        ["👑","Ketua Kelas","Nama Ketua"],
        ["⭐","Penolong Ketua","Nama Penolong"],
        ["📋","Setiausaha","Nama Setiausaha"],
        ["💰","Bendahari","Nama Bendahari"],
        ["🧹","AJK Kebersihan","Nama AJK"],
        ["📚","AJK Akademik","Nama AJK"]
    ];

    content.innerHTML=`

    <h2 class="title">🏫 Organisasi</h2>

    <p class="subtitle">
        Organisasi kelas 2 AL-HAMBALI
    </p>

    <div class="info-grid">

    ${data.map(x=>`

        <div class="info">

            <div class="emoji">${x[0]}</div>

            <h3>${x[1]}</h3>

            <p>${x[2]}</p>

        </div>

    `).join("")}

    </div>
    `;
}


/* PELAJAR */

function pelajar(){

    content.innerHTML=`

    <h2 class="title">👥 Pelajar</h2>

    <p class="subtitle">
        29 ahli kelas
    </p>

    <div class="people">

    ${students.map((name,i)=>`

        <div class="person">
            <b>${i+1}. ${name}</b>
            <small>
                ${i<10 ? "Lelaki" : "Perempuan"}
            </small>
        </div>

    `).join("")}

    </div>
    `;
}


/* VOTE */

let votes=JSON.parse(
    localStorage.getItem("votes2AL")
)||{};

let voted=
localStorage.getItem("alreadyVoted2AL")==="yes";

function votePage(){

    content.innerHTML=`

    <h2 class="title">🏆 Best Student</h2>

    <p class="subtitle">
        Pilih seorang pelajar terbaik.
        Setiap browser hanya boleh mengundi sekali.
    </p>

    <div class="vote-list">

    ${students.map((name,i)=>`

        <div class="vote">

            <span>${i+1}. ${name}</span>

            <button
                onclick="makeVote('${name}')"
                ${voted?"disabled":""}>
                ${voted?"Sudah Undi":"🗳️ UNDI"}
            </button>

        </div>

    `).join("")}

    </div>

    <h3 style="margin-top:25px">
        📊 Ranking
    </h3>

    ${ranking()}
    `;
}


function makeVote(name){

    if(voted){
        alert("Anda sudah mengundi!");
        return;
    }

    votes[name]=(votes[name]||0)+1;

    localStorage.setItem(
        "votes2AL",
        JSON.stringify(votes)
    );

    localStorage.setItem(
        "alreadyVoted2AL",
        "yes"
    );

    voted=true;

    votePage();

    alert("Undian berjaya! 🏆");
}


function ranking(){

    return students
    .map(n=>({
        name:n,
        votes:votes[n]||0
    }))
    .sort((a,b)=>b.votes-a.votes)
    .slice(0,5)
    .map((x,i)=>{

        let medal=["🥇","🥈","🥉","4️⃣","5️⃣"][i];

        return`
        <div class="rank">
            ${medal} <b>${x.name}</b>
            — ${x.votes} undi
        </div>
        `;
    })
    .join("");
}


/* GURU */

function guru(){

    const data=[
        ["Nama Guru Kelas","Guru Kelas"],
        ["Nama Cikgu 1","Bahasa Melayu"],
        ["Nama Cikgu 2","Bahasa Inggeris"],
        ["Nama Cikgu 3","Matematik"],
        ["Nama Cikgu 4","Sains"],
        ["Nama Cikgu 5","Sejarah"],
        ["Nama Cikgu 6","Geografi"],
        ["Nama Cikgu 7","Pendidikan Islam"],
        ["Nama Cikgu 8","RBT"]
    ];

    content.innerHTML=`

    <h2 class="title">📚 Guru & Subjek</h2>

    <p class="subtitle">
        Senarai guru yang mengajar kelas
    </p>

    <div class="teachers">

    ${data.map(x=>`

        <div class="teacher">

            <div style="font-size:35px">👨‍🏫</div>

            <h3>${x[0]}</h3>

            <p>📖 ${x[1]}</p>

        </div>

    `).join("")}

    </div>
    `;
}


/* GALERI */

function galeri(){

    content.innerHTML=`

    <h2 class="title">📸 Galeri</h2>

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


/* PENGUMUMAN */

function pengumuman(){

    content.innerHTML=`

    <h2 class="title">📢 Pengumuman</h2>

    <p class="subtitle">
        Maklumat kelas
    </p>

    <div class="info">

        <div class="emoji">🎉</div>

        <h3>
            Selamat Datang ke Portal
            2 AL-HAMBALI
        </h3>

        <p>
            Portal kelas untuk maklumat,
            organisasi, guru, pelajar,
            aktiviti dan kenangan kelas.
        </p>

    </div>

    `;
}


/* DARK / LIGHT */

document.getElementById("mode").onclick=()=>{

    document.body.classList.toggle("light");

    document.getElementById("mode").textContent=
        document.body.classList.contains("light")
        ?"☀"
        :"☾";
};
