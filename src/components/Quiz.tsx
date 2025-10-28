import React, { useState } from "react";
interface Answer {
  text: string;
  isAnswer: boolean;
}
interface Question {
  question: string;
  answers: Answer[];
  feedback: string;
}
interface Props {
  questions?: Question[];
}
const Quiz = ({
  questions = [
    {
      question: "Question?",
      answers: [
        { text: "thing1", isAnswer: true },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
      ],
      feedback: "feedback",
    },
    {
      question: "Question?",
      answers: [
        { text: "thing1", isAnswer: true },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
      ],
      feedback: "feedback",
    },
    {
      question: "Question?",
      answers: [
        { text: "thing1", isAnswer: true },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
        { text: "thing1", isAnswer: false },
      ],
      feedback: "feedback",
    },
  ],
}: Props) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );
  const handleClick = (index: number, isCorrect: boolean) => {
    const updated = [...selectedAnswers];
    updated[index] = isCorrect;
    setSelectedAnswers(updated);
  };

  return (
    <div className="bg-stone-900 w-9/10 p-4 rounded-xl">
      {questions.map((q, index) => (
        <div
          key={index}
          className="mb-4">
          <h3 className="text-white mb-2">{q.question}</h3>
          <div className="flex flex-col gap-2">
            {q.answers.map((ans, i) => (
              <button
                key={i}
                className={`p-2 rounded text-white transition-colors duration-300
  ${
    selectedAnswers[index] === null
      ? "bg-stone-700 hover:bg-stone-600 cursor-pointer" // if answer not selected yet
      : ans.isAnswer // if answer is select then check if its correct
      ? "bg-green-400 opacity-100 cursor-not-allowed" // is correct
      : "bg-red-400 opacity-20 cursor-not-allowed" // is false
  }`}
                onClick={() => handleClick(index, ans.isAnswer)}>
                {ans.text}
              </button>
            ))}
          </div>
          {selectedAnswers[index] !== null && (
            <div className="p-2 rounded text-white bg-stone-800">{q.feedback}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
