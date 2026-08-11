const students = [
    "Pelajar 1",
    "Pelajar 2",
    "Pelajar 3",
    "Pelajar 4",
    "Pelajar 5",
    "Pelajar 6",
    "Pelajar 7",
    "Pelajar 8",
    "Pelajar 9",
    "Pelajar 10"
];

let votes = JSON.parse(localStorage.getItem("votes")) || {};

students.forEach(student => {
    if (votes[student] === undefined) {
        votes[student] = 0;
    }
});

function showStudents() {

    const container = document.getElementById("students");

    container.innerHTML = "";

    students.forEach(student => {

        const div = document.createElement("div");

        div.className = "student";

        div.innerHTML = `
            <span>${student}</span>
            <button class="vote-btn" onclick="vote('${student}')">
                🗳️ Undi
            </button>
        `;

        container.appendChild(div);
    });
}

function vote(student) {

    if (localStorage.getItem("alreadyVoted")) {
        alert("Anda sudah mengundi! 🗳️");
        return;
    }

    votes[student]++;

    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("alreadyVoted", "true");

    alert("Undian berjaya! 🏆");

    showRanking();
}

function showRanking() {

    const ranking = document.getElementById("ranking");

    const sorted = [...students].sort(
        (a, b) => votes[b] - votes[a]
    );

    ranking.innerHTML = "";

    sorted.forEach((student, index) => {

        const div = document.createElement("div");

        div.className = "rank";

        let medal = "";

        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";

        div.innerHTML = `
            ${medal} <b>${index + 1}. ${student}</b>
            — ${votes[student]} undi
        `;

        ranking.appendChild(div);
    });
}

showStudents();
showRanking();
