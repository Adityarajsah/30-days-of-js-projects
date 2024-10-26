const flashcard = document.getElementById("flashcard");
let currentIndex = 0;

const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets" }
];

function flipFlashcard() {
    flashcard.classList.toggle("flipped");
}

function nextFlashcard() {
    flashcard.classList.remove("flipped");
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateFlashcard();
}

function updateFlashcard() {
    document.getElementById("flashcard-front").textContent = flashcards[currentIndex].question;
    document.getElementById("flashcard-back").textContent = flashcards[currentIndex].answer;
}

// Initialize the first flashcard
updateFlashcard();

// Flip card on click
flashcard.addEventListener("click", flipFlashcard);
