import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { GameBg, GameIcon, CheckedIcon } from "../assets";

const questions = [
  {
    question: "What is the moral you learnt from the story?",
    options: ["Honesty", "Kind", "Greed", "Angry"],
    correctAnswer: "Honesty",
  },
  {
    question: "What color is the sky?",
    image:
      "data:image/jpeg;base64,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",
    options: ["Green", "Blue", "Purple", "Orange"],
    correctAnswer: "Blue",
  },
  {
    question: "What color is grass?",
    image:
      "https://t3.ftcdn.net/jpg/01/99/08/08/360_F_199080856_ZFRgL8bvqHAtK2vUYH45nuzk6kq7hlL7.jpg",
    options: ["Red", "Yellow", "Brown", "Green"],
    correctAnswer: "Green",
  },
];

export default function ColorGuessingGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    setShowResult(true);
  };

  const handleSubmitAnswer = () => {
    navigate("/activity-completed");
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Game over logic here
      alert(`Game Over! Your score: ${score}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="bg-blue-100 overflow-hidden rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 relative flex flex-col items-center">
      <img src={GameBg} className="absolute bottom-[0] left-0 w-[500px]" />
      <h1 className="text-4xl font-bold text-center my-6 text-black">
        Activity <span style={{ fontFamily: "san" }}>2/2</span>
      </h1>
      <div className="text-center mb-6">
        <img
          src={GameIcon}
          alt="Question Image"
          className="w-48 h-48 mx-auto rounded-full shadow-lg"
        />
      </div>
      <div className="text-2xl font-normal text-center mb-6 text-gray-700 max-w-[278px]">
        {questions[currentQuestion].question}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6 absolute w-full bottom-40 max-w-[400px] ml-8">
        {questions[currentQuestion].options.map((option, index) => (
          <GameButton
            key={index}
            label={option}
            checked={selectedAnswer === option}
            onChange={() => handleAnswer(option)}
          />
        ))}
      </div>
      {selectedAnswer && (
        <button
          onClick={handleSubmitAnswer}
          className="hover:scale-105 active:scale-95 bg-red-500 absolute bottom-10 text-white text-xl font-bold py-4 px-6 rounded-2xl mt-6 flex items-center justify-center w-[400px] shadow-[0_8px_0_#9d361f]"
        >
          Submit answer
          <img
            src="src/assets/general/oval-bubble.svg"
            className="absolute top-2 left-2"
          />
        </button>
      )}
    </div>
  );
}

const GameButton = ({ label, checked, onChange }) => {
  return (
    <div
      className={`flex items-center justify-start gap-4 w-[160px] h-[47px] px-6 py-2 border-[3px] rounded-2xl ${
        checked ? "bg-[#53A5FF]" : "bg-white border-[#53A5FF]"
      } cursor-pointer`}
      onClick={onChange}
    >
      {checked ? (
        <img src={CheckedIcon} alt="Checked Icon" className="w-5 h-5" />
      ) : (
        <div className="w-6 h-6 border-2 border-[#53A5FF] rounded-full"></div>
      )}
      <div
        className={`text-sm font-normal ${
          checked ? "text-white" : "text-black"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
