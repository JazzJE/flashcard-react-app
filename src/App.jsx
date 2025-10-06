import { useState } from "react";
import "./App.css";

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What is the chemical symbol for water?", answer: "H₂O" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the smallest prime number?", answer: "2" },
  { question: "Which continent is the Sahara Desert located on?", answer: "Africa" },
  { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
  { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
  { question: "What gas do humans need to breathe to survive?", answer: "Oxygen" },
];

export default function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      resetState();
    }
  };

  const resetState = () => {
    setFlipped(false);
    setUserGuess("");
    setFeedback("");
  };

  const handleSubmit = () => {
    const correctAnswer = flashcards[currentCard].answer.trim().toLowerCase();
    const guess = userGuess.trim().toLowerCase();

    if (guess === correctAnswer) {
      setFeedback("✅ Correct!");
      setFlipped(true);
    } else {
      setFeedback("❌ Incorrect! Try again.");
    }
  };

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setCurrentCard(0);
    resetState();
  };

  const card = flashcards[currentCard];

  return (
    <div className="app-container">
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>

      <p className="total-cards">Number of cards: {flashcards.length}</p>

      <div className="flashcard" onClick={handleFlip}>
        <span>{flipped ? card.answer : card.question}</span>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Place your answer here..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Guess</button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}

      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={currentCard === 0}>
          ←
        </button>
        <button onClick={handleShuffle}>Shuffle Cards</button>
        <button
          onClick={handleNext}
          disabled={currentCard === flashcards.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
