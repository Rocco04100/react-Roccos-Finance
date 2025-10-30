
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import CompoundInterest from "./components/Cards/CompoundInterest";
import Savings from "./components/Cards/Savings";
import Landing from "./components/Cards/Landing";
import Nav from "./components/Nav";
//import BudgetInputs from "./components/BudgetInputs";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [step, setStep] = useState(0);

  const cardStyles = `
  border border-stone-700
  h-full
  bg-stone-800/90 backdrop-blur
  w-full 
  rounded-2xl
  shadow-2xl
  flex flex-col gap-6
  justify-center 
  items-center 
  p-8 sm:p-10

  `;
  const titleStyles = `
  text-4xl 
  sm:text-5xl 
  font-extrabold 
  text-transparent 
  bg-clip-text 
  bg-gradient-to-r from-green-400 to-emerald-300
  mb-6 text-center
  `;

  const saved = Number((Number(income) - Number(spent)).toFixed(2));

 
  const handleNavClick = (step: number) => {
    if (income == "" || spent == "") {
      alert(
        "Please enter a Monthly Income and Monthly Spent. You can use fake numbers for learning purposes"
      );
      return;
    }
      setStep(step);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="min-h-screen bg-stone-900 sm:px-6 md:px-12 flex flex-col items-center py-0 backdrop-blur gap-1">
        <Nav
          lessonList={[
            { name: "Start", tooltip: "" },
            { name: "Lesson 1", tooltip: "Savings" },
            { name: "Lesson 2", tooltip: "Interest" },
            { name: "Lesson 3", tooltip: "stupid" },
            { name: "Lesson 4", tooltip: "stupid" },
            { name: "Lesson 5", tooltip: "stupid" },
          ]}
          setStep={handleNavClick}
          step={step}
        />
        <Transition
          show={step === 0}
          unmount
          as={Fragment}
          enter="transition-all duration-500 ease-out"
          enterFrom="opacity-0 translate-y-6 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition-all duration-300 ease-in"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-6 scale-95">
          <div className={cardStyles}>
            <Landing
              titleStyles={titleStyles}
              saved={saved}
              setSpent={setSpent}
              spent={spent}
              setIncome={setIncome}
              income={income}
            />
          </div>
        </Transition>

        {/* -------SAVINGS CARD------- */}

        <Transition
          show={step === 1}
          unmount
          as={Fragment}
          enter="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <Savings
              titleStyles={titleStyles}
              saved={saved}
              income={Number(income)}
              spent={Number(spent)}
            />
          </div>
        </Transition>

        {/* -------COMPOUND INTEREST CARD------- */}

        <Transition
          show={step === 2}
          unmount
          as={Fragment}
          enter="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <CompoundInterest
              titleStyles={titleStyles}
              saved={saved}
            />
          </div>
        </Transition>

        <Transition
          show={step === 3}
          unmount
          as={Fragment}
          enter="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <p>Lesson 4 is still in progress come back soon!</p>
          </div>
        </Transition>

        <Transition
          show={step === 4}
          unmount
          as={Fragment}
          enter="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <p>Lesson 4 is still in progress come back soon!</p>
          </div>
        </Transition>
        <Transition
          show={step === 5}
          unmount
          as={Fragment}
          enter="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <p>Lesson 5 is still in progress come back soon!</p>
          </div>
        </Transition>
      </div>
    </>
  );
}

export default App;
