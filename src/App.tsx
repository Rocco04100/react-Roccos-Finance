
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import CompoundInterest from "./components/Pages/CompoundInterest";
import Savings from "./components/Pages/Savings";
import NavButtons from "./components/NavButtons";
import Landing from "./components/Pages/Landing";
//import BudgetInputs from "./components/BudgetInputs";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [step, setStep] = useState(0);

  const cardStyles = `
  border border-stone-700
  min-h-screen 
  bg-stone-800/90 backdrop-blur
  w-full 
  rounded-2xl 
  shadow-lg
  flex flex-col gap-6
  justify-center 
  items-center 
  p-8 sm:p-10
  transition-shadow duration-300
  hover:shadow-2xl
  hover:scale-[1.001]
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

  const handleNext = () => {
    if (income == "" || spent == "") {
      alert(
        "Please enter a Monthly Income and Monthly Spent. You can use fake numbers for learning purposes"
      );
      return;
    } else if(step < 2){
      setStep(step + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const handleBack = () => {
    if (step >= 1) {
      setStep(step - 1);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-stone-900 sm:px-6 md:px-12 flex flex-col items-center gap-12 py-0">
        <Transition
          show={step === 0}
          as={Fragment}
          enter="transition-all duration-700 ease-out"
          enterFrom="opacity-0 translate-y-6 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition-all duration-500 ease-in"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-6 scale-95">
          <div className={cardStyles}>
            <Landing titleStyles={titleStyles} saved={saved} setSpent={setSpent} spent={spent} setIncome={setIncome} income={income}  />
            <NavButtons
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </div>
        </Transition>

        {/* -------SAVINGS CARD------- */}

        <Transition
          show={step === 1}
          as={Fragment}
          enter="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-500 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <Savings
              titleStyles={titleStyles}
              saved={saved}
              income={Number(income)}
              spent={Number(spent)}
            />
            <NavButtons
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </div>
        </Transition>

        {/* -------COMPOUND INTEREST CARD------- */}

        <Transition
          show={step === 2}
          as={Fragment}
          enter="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-500 ease-in"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10">
          <div className={cardStyles}>
            <CompoundInterest
              titleStyles={titleStyles}
              saved={saved}
            />
            <NavButtons
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </div>
        </Transition>

        {/*-------NEW CARD HERE------- }
        <div className={cardStyles}>
          <h1 className={titleStyles}>Monthly Budgeting</h1>
          <p className="text-green-300 sm:text-xl text-lg text-center">
            Lets look deeper into your spending and see if you could be saving
            more.
          </p>
          <p className="text-white sm:text-xl text-lg text-center">
            Use this tool to go through your transactions for the month and
            determine if they were a want or need.
          </p>
         
            
        </div> */}
      </div>
    </>
  );
}

export default App;
