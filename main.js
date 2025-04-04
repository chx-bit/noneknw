const quizData = [
    {
        question: "Apa kepanjangan dari CSS?",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ],
        answer: 0,
    },
    {
        question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2,
    },
    {
        question:
            "Bagaimana cara memberi warna latar belakang merah pada elemen &lt;div&gt;?",
        options: [
            "background: red;",
            "color: red;",
            "bg-color: red;",
            "background-color: red;",
        ],
        answer: 3,
    },
    {
        question: "Apa nilai default dari properti position?",
        options: ["absolute", "relative", "fixed", "static"],
        answer: 3,
    },
    {
        question: "Unit mana yang relatif terhadap ukuran font elemen induk?",
        options: ["px", "em", "%", "vw"],
        answer: 1,
    },
    {
        question:
            "Properti CSS mana yang digunakan untuk mengatur ukuran font?",
        options: ["font-size", "text-size", "size", "font-style"],
        answer: 0,
    },
    {
        question: "Bagaimana cara membuat teks menjadi miring?",
        options: [
            "font-style: italic;",
            "text-style: italic;",
            "font-variant: italic;",
            "text-transform: italic;",
        ],
        answer: 0,
    },
    {
        question: "Properti CSS apa yang digunakan untuk mengatur margin?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 0,
    },
    {
        question: "Properti CSS apa yang digunakan untuk mengatur padding?",
        options: ["padding", "margin", "gap", "spacing"],
        answer: 0,
    },
    {
        question: "Bagaimana cara mengatur border solid 1px pada elemen?",
        options: [
            "border: 1px dotted black;",
            "border: 1px dashed black;",
            "border: 1px solid black;",
            "border: 1px double black;",
        ],
        answer: 2,
    },
    {
        question: "Apa fungsi dari properti <code>display: none;</code>?",
        options: [
            "Menyembunyikan elemen dari tampilan",
            "Menghapus elemen dari DOM",
            "Menyembunyikan elemen tetapi masih mengambil ruang",
            "Mengatur elemen agar berada di luar layar",
        ],
        answer: 0,
    },
    {
        question: "Bagaimana cara membuat teks menjadi center?",
        options: [
            "align: center;",
            "text-align: center;",
            "center-text: true;",
            "justify-content: center;",
        ],
        answer: 1,
    },
    {
        question:
            "Properti CSS apa yang digunakan untuk mengubah background image?",
        options: [
            "background-image",
            "image-background",
            "bg-image",
            "background-src",
        ],
        answer: 0,
    },
    {
        question: "Bagaimana cara menambahkan efek bayangan pada teks?",
        options: [
            "text-shadow: 2px 2px 5px gray;",
            "box-shadow: 2px 2px 5px gray;",
            "shadow-text: 2px 2px 5px gray;",
            "font-shadow: 2px 2px 5px gray;",
        ],
        answer: 0,
    },
    {
        question: "Apa nilai default properti overflow?",
        options: ["visible", "hidden", "scroll", "auto"],
        answer: 0,
    },
    {
        question: "Bagaimana cara membuat teks tebal di CSS?",
        options: [
            "font-weight: bold;",
            "text-bold: true;",
            "bold: yes;",
            "font-style: strong;",
        ],
        answer: 0,
    },
    {
        question: "Properti CSS mana yang mengontrol ukuran teks?",
        options: ["font-size", "text-size", "size", "font-style"],
        answer: 0,
    },
    {
        question:
            "Bagaimana cara menyusun elemen secara horizontal dengan flexbox?",
        options: [
            "display: block;",
            "display: flex;",
            "display: grid;",
            "display: inline-block;",
        ],
        answer: 1,
    },
    {
        question:
            "Properti CSS apa yang digunakan untuk mengatur transparansi elemen?",
        options: ["visibility", "opacity", "filter", "alpha"],
        answer: 1,
    },
    {
        question:
            "Apa nilai default dari properti flex-direction dalam Flexbox?",
        options: ["row", "column", "row-reverse", "column-reverse"],
        answer: 0,
    },
    {
        question: "Bagaimana cara mengatur jarak antar huruf dalam teks?",
        options: [
            "word-spacing",
            "letter-spacing",
            "text-spacing",
            "font-spacing",
        ],
        answer: 1,
    },
    {
        question:
            "Properti mana yang digunakan untuk menambahkan bayangan pada elemen box?",
        options: ["box-shadow", "text-shadow", "shadow-box", "drop-shadow"],
        answer: 0,
    },
    {
        question: "Bagaimana cara membuat garis bawah pada teks?",
        options: [
            "border-bottom: 1px solid;",
            "text-decoration: underline;",
            "font-decoration: underline;",
            "underline: true;",
        ],
        answer: 1,
    },
    {
        question:
            "Properti CSS apa yang digunakan untuk mengatur jarak antar baris teks?",
        options: ["line-height", "row-spacing", "letter-height", "text-line"],
        answer: 0,
    },
    {
        question: "Bagaimana cara mengatur layout grid dengan CSS?",
        options: [
            "display: flex;",
            "display: block;",
            "display: grid;",
            "display: table;",
        ],
        answer: 2,
    },
    {
        question:
            "Properti mana yang digunakan untuk mengatur distribusi ruang antar item dalam Flexbox?",
        options: [
            "align-items",
            "justify-content",
            "flex-distribution",
            "space-between",
        ],
        answer: 1,
    },
    {
        question:
            "Bagaimana cara membuat elemen tidak terlihat tetapi tetap mengambil ruang di layout?",
        options: [
            "display: none;",
            "visibility: hidden;",
            "opacity: 0;",
            "hidden: true;",
        ],
        answer: 1,
    },
    {
        question:
            "Bagaimana cara menyembunyikan elemen dari tampilan dan layout?",
        options: [
            "visibility: collapse;",
            "opacity: 0;",
            "display: none;",
            "hidden: true;",
        ],
        answer: 2,
    },
    {
        question:
            "Properti CSS mana yang digunakan untuk menentukan ketebalan border?",
        options: [
            "border-style",
            "border-width",
            "border-size",
            "border-weight",
        ],
        answer: 1,
    },
    {
        question: "Bagaimana cara mengatur orientasi teks secara vertikal?",
        options: [
            "writing-mode: vertical-lr;",
            "text-orientation: vertical;",
            "vertical-align: middle;",
            "rotate: 90deg;",
        ],
        answer: 0,
    },
    {
        question:
            "Bagaimana cara menargetkan elemen terakhir dalam sebuah daftar (elemen &lt;li&gt;) menggunakan CSS?",
        options: ["li:last-child", "li:last", "li:nth-last-child", "li:end"],
        answer: 0,
    },
    {
        question:
            "Properti mana yang digunakan untuk membuat grid dengan jumlah kolom yang fleksibel?",
        options: [
            "grid-template-columns: auto;",
            "grid-auto-columns: auto;",
            "grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));",
            "grid-auto-flow: column;",
        ],
        answer: 2,
    },
    {
        question: "Apa fungsi dari properti CSS mix-blend-mode?",
        options: [
            "Menggabungkan warna dari elemen yang bertumpuk",
            "Menyesuaikan transparansi elemen",
            "Menentukan mode blending warna pada elemen latar belakang",
            "Menentukan mode animasi untuk elemen",
        ],
        answer: 0,
    },
    {
        question: "Apa kegunaan properti will-change di CSS?",
        options: [
            "Mengoptimalkan kinerja rendering untuk perubahan mendatang",
            "Mengubah gaya elemen secara dinamis",
            "Menambahkan efek animasi otomatis",
            "Mengontrol perilaku elemen dalam responsive design",
        ],
        answer: 0,
    },
    {
        question:
            "Bagaimana cara mengatur tinggi elemen agar sesuai dengan tinggi layar viewport?",
        options: [
            "height: 100%;",
            "height: auto;",
            "height: 100vh;",
            "height: fit-content;",
        ],
        answer: 2,
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let currentQuestionIndex = 0;
let score = 0;
let processedQuizData = [];
const landingEl = document.getElementById("landing");
const startBtn = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("questionContainer");
const optionContainer = document.getElementById("option");
const nextBtn = document.getElementById("nextButton");
const scoreContainer = document.getElementById("scoreContainer");
const scoreText = document.getElementById("scoreText");
const downloadBtn = document.getElementById("downloadButton");
const totalQuestions = 35;
const progressBarFill = document.getElementById("progressBarFill");
const textHasil = document.getElementById("hasil");

startBtn.addEventListener("click", () => {
    landingEl.style.display = "none";

    document.getElementById("landing-shadow").style.display = "none";
    processedQuizData = quizData.map((question) => {
        const shuffledOptions = shuffleArray([...question.options]);
        return {
            question: question.question,
            options: shuffledOptions,
            answer: shuffledOptions.indexOf(question.options[question.answer]),
        };
    });
    setTimeout(() => {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.style.display = "block";
        displayQuestion();
    }, 1500);
});

function updateProgressBar() {
    let progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    progressBarFill.style.width = progressPercent + "%";
    progressBarFill.textContent = Math.round(progressPercent) + "%";
    if (currentQuestionIndex < 15) {
        progressBarFill.style.backgroundColor = "green";
    } else if (currentQuestionIndex < 30) {
        progressBarFill.style.backgroundColor = "orange";
    } else {
        progressBarFill.style.backgroundColor = "red";
    }
}

function displayQuestion() {
    questionContainer.innerHTML = "";
    optionContainer.textContent = "";
    if (currentQuestionIndex >= processedQuizData.length) {
        showScore();
        return;
    }
    const currentData = processedQuizData[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${currentData.question}</h2>`;
    let optionsHTML = "";
    currentData.options.forEach((option, index) => {
        optionsHTML += `<div class="option" data-index="${index}">${option}</div>`;
    });
    optionContainer.innerHTML = optionsHTML;
    const optionDivs = optionContainer.querySelectorAll(".option");
    optionDivs.forEach((div) => {
        div.onclick = function () {
            optionDivs.forEach((el) => el.classList.remove("selected"));
            this.classList.add("selected");
        };
    });
    updateProgressBar();
}
document.getElementById("prevButton").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});
document.getElementById("resetButton").addEventListener("click", () => {
    document.querySelectorAll("#option .selected").forEach((option) => {
        option.classList.remove("selected");
    });
});
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("#option .selected");
    if (!selected) {
        alert("Pilih jawaban dulu!");
        return;
    }
    const selectedAnswer = parseInt(selected.dataset.index);
    if (selectedAnswer === processedQuizData[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
});

function showScore() {
    quizContainer.style.display = "none";
    scoreContainer.style.display = "flex";

    const percentageScore = Math.round((score / totalQuestions) * 100);

    document.getElementById("score").textContent = percentageScore;
    scoreText.textContent = `Skor Anda: ${percentageScore} / 100`;

    const sticker = document.getElementById("sticker");
    if (score >= 80) {
        sticker.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqQnLSWAsawNI--bDKw5rvcbscFuP_E3eTs_93oxAhw0zaMpnR-p7P5Zk&s=10";
        textHasil.textContent = "SDM TINGGI,RESPECT KING 👑;";
    } else if (score >= 65) {
        sticker.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPnLJVw515woobpzlR807J_wxOsbgksvagQzdEDV7-8bQ85CeWXbTgSE&s=10";
        textHasil.textContent = "Lumayan lah 😌";
    } else if (score >= 40) {
        sticker.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZa9e0hhgnIvdCbcsEKv4PZkAcvWPJaFPSBig8y9At8oAWy-AnvIuu8LH&s=10";
        textHasil.textContent = "Belajar lagi ya! 😁";
    } else if (score >= 0) {
        sticker.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x8j22RymvR2TqRekGtSdeQA2URqS0RMMl_dW70_YWBS2E-JyhST8_S64&s=10";
        textHasil.textContent = "lu miskin karna lu goblok!! 😹";
    }

    sticker.onload = function () {
        downloadBtn.style.display = "block";
    };

    document.getElementById("resetButton").style.display = "none";
}
downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    html2canvas(scoreContainer).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "hasil_kuis.png";
        link.click();
        downloadBtn.style.display = "block";
    });
});
downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    html2canvas(scoreContainer, { useCORS: true }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "hasil_kuis.png";
        link.click();
        downloadBtn.style.display = "block";
    });
});
