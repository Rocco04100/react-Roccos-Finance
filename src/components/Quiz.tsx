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
    <div className="max-w-5xl mx-auto bg-stone-900/90 p-8 rounded-3xl shadow-xl space-y-8">
      {questions.map((q, index) => (
        <div
          key={index}
          className="mb-8 p-6 rounded-2xl bg-stone-800/80 border border-stone-700 shadow-lg hover:shadow-lgl transition-colors duration-200">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">
            {q.question}
          </h3>
          <div className="flex flex-col gap-2">
            {q.answers.map((ans, i) => (
              <button
                key={i}
                className={`w-full text-left px-5 py-3 rounded-xl border border-stone-500 text-white transition-all duration-300
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
            <div className="p-3 mt-3 text-sm sm:text-base font-medium rounded-lg bg-stone-900 border border-stone-700 text-stone-200 italic">
              {q.feedback}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
