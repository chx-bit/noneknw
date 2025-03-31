// Data kuis (contoh; tambahkan hingga 20 soal sesuai kebutuhan)
const quizData = [
  {
    question: "Apa kepanjangan dari CSS?",
    options: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style System",
      "Colorful Style Syntax"
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
      "Dengan tag &lt;link&gt;"
    ],
    answer: 2,
  },
  {
    question: "Urutan yang benar dalam box model CSS dari dalam ke luar adalah?",
    options: [
      "Margin-Border-Padding-Content",
      "Content-Padding-Border-Margin", 
      "Content-Border-Padding-Margin",
      "Padding-Content-Margin-Border"
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
      "@media only screen and (max-width: 768px)"
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
      "&lt;style href='style.css'&gt;"
    ],
    answer: 2,
  },
  {
    question: "Bagaimana cara membuat div berada di tengah secara horizontal?",
    options: [
      "margin: auto",
      "padding: center",
      "align: middle",
      "position: center"
    ],
    answer: 0,
  },
  {
    question: "Properti z-index digunakan untuk?",
    options: [
      "Mengatur urutan tumpukan elemen",
      "Mengatur zoom elemen",
      "Membuat efek 3D",
      "Mengatur kedalaman warna"
    ],
    answer: 0,
  },
  {
    question: "Properti untuk transisi animasi selama 2 detik?",
    options: [
      "transition: 2s",
      "animation-duration: 2s",
      "transition-duration: 2s",
      "transform: 2s"
    ],
    answer: 2,
  },
  {
    question: "Manakah properti CSS Grid untuk membuat kolom?",
    options: [
      "grid-template-rows",
      "grid-columns",
      "grid-template-columns",
      "grid-flow"
    ],
    answer: 2,
  },
  {
    question: "Apa efek dari !important dalam CSS?",
    options: [
      "Meningkatkan prioritas spesifisitas",
      "Membuat animasi penting",
      "Mengubah properti menjadi kapital",
      "Menonaktifkan properti"
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
      "rem untuk margin, em untuk padding"
    ],
    answer: 0,
  },
  {
    question: "Manakah contoh penggunaan transform?",
    options: [
      "transform: rotate(45deg)",
      "transform: red to blue",
      "transform: margin 2s",
      "transform: 3D-effect"
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
  
  // Proses pengacakan soal
  processedQuizData = quizData.map(question => {
    const shuffledOptions = shuffleArray([...question.options]);
    return {
      question: question.question,
      options: shuffledOptions,
      answer: shuffledOptions.indexOf(question.options[question.answer])
    };
  });

  setTimeout(() => {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";
    displayQuestion();
  }, 1500);
});

// Fungsi tampilkan soal
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
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="q${currentQuestionIndex}" value="${index}">
      ${option}
    `;
    optionsContainer.appendChild(label);
  });
}

// Event Listener untuk Next Button
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(
    `input[name="q${currentQuestionIndex}"]:checked`
  );
  
  if (!selected) {
    alert("Pilih jawaban dulu!");
    return;
  }

  const selectedAnswer = parseInt(selected.value);
  if (selectedAnswer === processedQuizData[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion();
});

// Fungsi tampilkan skor (tetap sama)
function showScore() {
  questionContainer.textContent = "Quiz Selesai!";
  scoreText.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
  nextBtn.style.display = "none";
  scoreContainer.style.display = "block";
}

// Fungsi download hasil (tetap sama)
downloadBtn.addEventListener("click", () => {
  html2canvas(scoreContainer).then(canvas => {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "hasil_kuis.png";
    link.click();
  });
});
