import { useState } from "react";
import "./App.css";  // <-- import your stylesheet

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
  { question: "What year did World War II end?", answer: "1945" },
  { question: "What is the square root of 64?", answer: "8" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "Who is known as the Father of Computers?", answer: "Charles Babbage" },
  { question: "What is the fastest land animal?", answer: "Cheetah" },
  { question: "What is the longest river in the world?", answer: "Nile River" },
  { question: "In which country were the Olympic Games invented?", answer: "Greece" },
  { question: "What is the main language spoken in Brazil?", answer: "Portuguese" },
  { question: "What is the freezing point of water in Celsius?", answer: "0°C" },
];


export default function App() {
  const [currentCard, setCurrentCard] = useState(
    Math.floor(Math.random() * flashcards.length)
  );
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(randomIndex);
    setFlipped(false);
  };

  const card = flashcards[currentCard];

  return (
    <div className="app-container">
      <h1>Flashcard Study App</h1>
      <p className="app-description">A simple flashcard app to help you study and test your knowledge.</p>

      <p className="total-cards">Total Cards: {flashcards.length}</p>

      <div className="flashcard" onClick={handleFlip}>
        <span>{flipped ? card.answer : card.question}</span>
      </div>

      <button className="next-button" onClick={handleNext}>
        Next Card
      </button>
    </div>
  );
}
