// Data kuis (contoh; tambahkan hingga 20 soal sesuai kebutuhan)
const quizData = [
  {
    question: "Apa kepanjangan dari CSS?",
    options: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style System",
      "Colorful Style Syntax",
    ],
    answer: 0,
  },
  {
    question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
    options: ["text-color", "font-color", "color", "text-style"],
    answer: 2,
  },
  {
    question: "Bagaimana cara memasukkan CSS secara inline?",
    options: [
      "&lt;style&gt; dalam header",
      "Menggunakan file .css terpisah",
      "Menggunakan atribut style",
      "Dengan tag &lt;link&gt;",
    ],
    answer: 2,
  },
  {
    question:
      "Urutan yang benar dalam box model CSS dari dalam ke luar adalah?",
    options: [
      "Margin-Border-Padding-Content",
      "Content-Padding-Border-Margin",
      "Content-Border-Padding-Margin",
      "Padding-Content-Margin-Border",
    ],
    answer: 1,
  },
  {
    question: "Nilai mana yang BUKAN termasuk properti position?",
    options: ["relative", "fixed", "center", "sticky"],
    answer: 2,
  },
  {
    question: "Properti CSS mana yang digunakan untuk flex container?",
    options: ["flex-direction", "flex-grow", "align-self", "order"],
    answer: 0,
  },
  {
    question: "Manakah yang memiliki spesifisitas tertinggi?",
    options: ["Class selector", "ID selector", "Tag selector", "Inline styles"],
    answer: 3,
  },
  {
    question: "Syntax media query untuk device dengan lebar maksimum 768px?",
    options: [
      "@media (max-width: 768px)",
      "@media screen and (min-width: 768px)",
      "@media (device-width: 768px)",
      "@media only screen and (max-width: 768px)",
    ],
    answer: 3,
  },
  {
    question: "Pseudo-class untuk keadaan ketika elemen dihover?",
    options: [":active", ":hover", ":focus", ":visited"],
    answer: 1,
  },
  {
    question: "Cara menghubungkan file CSS eksternal?",
    options: [
      "&lt;script src='style.css'&gt;",
      "&lt;css&gt;import style.css&lt;/css&gt;",
      "&lt;link rel='stylesheet' href='style.css'&gt;",
      "&lt;style href='style.css'&gt;",
    ],
    answer: 2,
  },
  {
    question: "Bagaimana cara membuat div berada di tengah secara horizontal?",
    options: [
      "margin: auto",
      "padding: center",
      "align: middle",
      "position: center",
    ],
    answer: 0,
  },
  {
    question: "Properti z-index digunakan untuk?",
    options: [
      "Mengatur urutan tumpukan elemen",
      "Mengatur zoom elemen",
      "Membuat efek 3D",
      "Mengatur kedalaman warna",
    ],
    answer: 0,
  },
  {
    question: "Properti untuk transisi animasi selama 2 detik?",
    options: [
      "transition: 2s",
      "animation-duration: 2s",
      "transition-duration: 2s",
      "transform: 2s",
    ],
    answer: 2,
  },
  {
    question: "Manakah properti CSS Grid untuk membuat kolom?",
    options: [
      "grid-template-rows",
      "grid-columns",
      "grid-template-columns",
      "grid-flow",
    ],
    answer: 2,
  },
  {
    question: "Apa efek dari !important dalam CSS?",
    options: [
      "Meningkatkan prioritas spesifisitas",
      "Membuat animasi penting",
      "Mengubah properti menjadi kapital",
      "Menonaktifkan properti",
    ],
    answer: 0,
  },
  {
    question: "Display default untuk tag &lt;div&gt; adalah?",
    options: ["inline", "block", "flex", "inline-block"],
    answer: 1,
  },
  {
    question: "Apa perbedaan rem dan em?",
    options: [
      "rem relatif ke font-size root, em ke parent",
      "em relatif ke viewport, rem ke parent",
      "Keduanya sama",
      "rem untuk margin, em untuk padding",
    ],
    answer: 0,
  },
  {
    question: "Manakah contoh penggunaan transform?",
    options: [
      "transform: rotate(45deg)",
      "transform: red to blue",
      "transform: margin 2s",
      "transform: 3D-effect",
    ],
    answer: 0,
  },
  {
    question: "Selector untuk elemen dengan atribut 'title'?",
    options: ["a.title", "a[title]", "a&gt;title", "a::title"],
    answer: 1,
  },
  {
    question: "Properti untuk mengatur vertikal align di table cell?",
    options: ["align", "vertical-align", "text-align", "float"],
    answer: 1,
  },
  {
    question: "Manakah yang BUKAN nilai valid untuk properti display?",
    options: ["grid", "inline-flex", "table-cell", "block-container"],
    answer: 3,
  },
  {
    question: "Properti mana yang digunakan untuk membuat efek bayangan teks?",
    options: ["text-effect", "shadow", "text-shadow", "font-shadow"],
    answer: 2,
  },
  {
    question: "Apa fungsi dari clearfix hack dalam CSS?",
    options: [
      "Membersihkan float",
      "Mengatur z-index",
      "Menghilakan margin collapse",
      "Mengatasi overflow"
    ],
    answer: 0,
  },
  {
    question: "Manakah pseudo-element yang benar?",
    options: ["::before", ":after-element", ";;first-line", "..hover"],
    answer: 0,
  },
  {
    question: "Apa yang terjadi saat menggunakan overflow: hidden?",
    options: [
      "Konten yang overflow akan dipotong",
      "Muncul scrollbar otomatis",
      "Elemen menjadi transparan",
      "Mengubah tipe display"
    ],
    answer: 0,
  },
  {
    question: "Unit mana yang relatif terhadap ukuran font elemen saat ini?",
    options: ["rem", "px", "em", "vw"],
    answer: 2,
  },
  {
    question: "Bagaimana cara membuat gradient linear dari atas ke bawah?",
    options: [
      "linear-gradient(top, red, blue)",
      "linear-gradient(to bottom, red, blue)",
      "linear-gradient(vertical, red, blue)",
      "linear-gradient(180deg, red, blue)"
    ],
    answer: 3,
  },
  {
    question: "Properti mana yang mengatur jarak antar karakter?",
    options: ["letter-spacing", "word-spacing", "text-indent", "line-height"],
    answer: 0,
  },
  {
    question: "Apa fungsi dari will-change property?",
    options: [
      "Memprediksi perubahan layout",
      "Mengoptimalkan performa animasi",
      "Membuat efek transisi",
      "Mengubah nilai properti secara otomatis"
    ],
    answer: 1,
  },
  {
    question: "Manakah contoh valid media query untuk orientasi portrait?",
    options: [
      "@media (orientation: portrait)",
      "@media (device-orientation: vertical)",
      "@media (layout: portrait)",
      "@media (view-mode: upright)"
    ],
    answer: 0,
  },
  {
    question: "Apa fungsi dari backface-visibility property?",
    options: [
      "Mengatur visibilitas saat elemen dirotate 3D",
      "Mengatur bayangan belakang elemen",
      "Membuat efek refleksi",
      "Mengontrol overflow di belakang elemen"
    ],
    answer: 0,
  },
  {
    question: "Manakah yang BUKAN nilai untuk justify-content?",
    options: ["space-evenly", "space-around", "space-between", "space-distribute"],
    answer: 3,
  },
  {
    question: "Properti mana yang digunakan untuk membuat kolom teks?",
    options: ["text-columns", "column-count", "multi-column", "text-flow"],
    answer: 1,
  },
  {
    question: "Apa fungsi dari @supports rule?",
    options: [
      "Mengecek dukungan browser terhadap fitur CSS",
      "Mendefinisikan variabel CSS",
      "Membuat conditional styling untuk print",
      "Mengimport font eksternal"
    ],
    answer: 0,
  },
  {
    question: "Manakah cara yang benar untuk membuat animasi CSS?",
    options: [
      "@keyframes slide { from { ... } to { ... } }",
      "@animation slide { 0% { ... } 100% { ... } }",
      "#slide { animation: ... }",
      "keyframes @slide { ... }"
    ],
    answer: 0,
  },
  {
    question: "Apa fungsi dari pointer-events property?",
    options: [
      "Mengontrol interaksi mouse dengan elemen",
      "Membuat efek hover",
      "Mengubah bentuk kursor",
      "Mengatur responsivitas sentuhan"
    ],
    answer: 0,
  }
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

// Element references tetap sama
const landingEl = document.getElementById("landing");
const anonymous = document.getElementById("anonymous");
const startBtn = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextButton");
const scoreContainer = document.getElementById("scoreContainer");
const scoreText = document.getElementById("scoreText");
const downloadBtn = document.getElementById("downloadButton");

// Event Listener untuk Start Button
startBtn.addEventListener("click", () => {
  landingEl.style.display = "none";
  anonymous.style.display = "none";

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

function displayQuestion() {
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  if (currentQuestionIndex >= processedQuizData.length) {
    showScore();
    return;
  }

  const currentData = processedQuizData[currentQuestionIndex];
  questionContainer.innerHTML = `<h2>${currentData.question}</h2>`;

  currentData.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.innerHTML = option;
    optionDiv.dataset.index = index;
    optionDiv.onclick = function () {
      document.querySelectorAll("#optionsContainer div").forEach((el) => {
        el.classList.remove("selected");
      });
      this.classList.add("selected");
    };
    optionsContainer.appendChild(optionDiv);
  });
}

document.getElementById("resetButton").addEventListener("click", () => {
  document.querySelectorAll("#optionsContainer .selected").forEach((option) => {
    option.classList.remove("selected");
  });
});

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("#optionsContainer .selected");

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
  scoreContainer.style.display = "block";
  scoreText.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
  downloadBtn.style.display = "block";
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
