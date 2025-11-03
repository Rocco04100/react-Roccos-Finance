import { useState } from "react";

import CompoundInterest from "./components/Cards/CompoundInterest";
import Savings from "./components/Cards/Savings";
import Landing from "./components/Cards/Landing";
import Nav from "./components/Nav";
import Card from "./components/Cards/Card";
import SpendingSmart from "./components/Cards/SpendingSmart";
import SavingOptions from "./components/Cards/SavingOptions";
//import BudgetInputs from "./components/BudgetInputs";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [step, setStep] = useState(0);


  const saved = Number((Number(income) - Number(spent)).toFixed(2));

  const handleNavClick = (step: number) => {
    if (income == "" || spent == "") {
      alert(
        "Please enter a Monthly Income and Monthly Spent. You can use fake numbers for learning purposes"
      );
      return;
    }
    setStep(step);
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <>
      <Nav
        lessonList={[
          { name: "Start", tooltip: "" },
          { name: "Lesson 1", tooltip: "Savings" },
          { name: "Lesson 2", tooltip: "Spending Smart" },
          { name: "Lesson 3", tooltip: "What to do with Savings" },
          { name: "Lesson 4", tooltip: "Compound Interest" },
          { name: "Lesson 5", tooltip: "In Progress!" },
        ]}
        setStep={handleNavClick}
        step={step}
      />
      <div className="min-h-screen bg-stone-900 sm:px-6 mt-5 sm:my-0 md:px-12 flex flex-col items-center py-0 backdrop-blur gap-1">
        <Card
          step={step}
          stepShow={0}>
          <Landing
            saved={saved}
            setSpent={setSpent}
            spent={spent}
            setIncome={setIncome}
            income={income}
          />
        </Card>

        {/* -------Lesson 1 SAVINGS CARD------- */}

        <Card
          step={step}
          stepShow={1}>
          <Savings
            saved={saved}
            income={Number(income)}
            spent={Number(spent)}
          />
        </Card>

        {/* -------Lesson 2 Spending Smart Card------- */}
        <Card
          step={step}
          stepShow={2}>
          <SpendingSmart
            spent={Number(spent)}
            saved={saved}
            income={Number(income)}
          />
        </Card>

        {/* -------Lesson What to do with my savings? 3------- */}
        <Card
          step={step}
          stepShow={3}>
          <SavingOptions />
        </Card>
        {/* -------Lesson 4 Compound Interest CARD------- */}

        <Card
          step={step}
          stepShow={4}>
          <CompoundInterest saved={saved} />
        </Card>
        {/* -------Lesson 5------- */}
        <Card
          step={step}
          stepShow={5}>
          <p>Lesson 5 is still in progress come back soon!</p>
        </Card>
        <div>
          {step < 5 && (
            <button
              className="bg-stone-700 font-bold border rounded-2xl px-5 py-1 text-2xl mb-5 cursor-pointer hover:bg-stone-500"
              onClick={() => {
                handleNavClick(step + 1);
              }}>
              Next Lesson
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
