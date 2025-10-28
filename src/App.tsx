import Intro from "./components/Intro";
import DoughnutChart from "./components/DoughnutChart";
import Inputs from "./components/Inputs";
import { useState } from "react";
import BarChart from "./components/BarChart";
import Slider from "./components/Slider";
import DropDown from "./components/DropDown";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import BudgetInputs from "./components/BudgetInputs";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [interestRate, setInterestRate] = useState(0);

  const cardStyles = `
  border border-stone-700
  my-5 
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
  text-3xl 
  text-white 
  font-bold
  `;

  const saved = Number(income) - Number(spent);

  const calculateFutureValue = (years: number) => {
    //Compound interest math helper for bar Chart
    const monthlyPayment = saved > 0 ? saved : 100; // P --> amount of monthly deposit
    const monthlyRate = interestRate / 100 / 12; // r --> interest rate
    const numMonths = years * 12; // n --> number of months

    if (monthlyRate === 0) {
      return monthlyPayment * numMonths;
    }
    // Compound interest calculation P * ((1+r)^n - 1 )/r
    const futureValue =
      (monthlyPayment * (Math.pow(1 + monthlyRate, numMonths) - 1)) /
      monthlyRate;

    return Math.round(futureValue * 100) / 100;
  };

  return (
    <>
      <div className="min-h-screen bg-stone-900 sm:px-6 md:px-12 flex flex-col items-center gap-12 py-10">
        <div className={cardStyles}>
          <Intro />
          <Inputs
            income={income}
            setIncome={setIncome}
            spent={spent}
            setSpent={setSpent}
          />
          <div className="flex w-full items-center justify-center my-10 sm:min-h-[10rem] min-h-[12rem]">
            <Transition
              show={income !== "" && spent !== ""}
              as={Fragment}
              enter="transition-all duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              enterFrom="opacity-0 translate-y-6 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition-all duration-3000 ease-in-out"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-6 scale-95">
              <p
                className={`text-2xl text-center my-10 ${
                  saved > 0 ? "text-green-300" : "text-red-300"
                }`}>
                {saved > 0
                  ? `Great!! you saved $${saved} this month! This is the number we can look at to project future growth`
                  : `You spent $${Math.abs(
                      saved
                    )} more than you earned this month. That's okay! This tool is designed to help. Let's look at the chart below to see the breakdown.`}
              </p>
            </Transition>
          </div>
        </div>

        {/* -------SAVINGS CARD------- */}

        <div className={cardStyles}>
          <h1 className={titleStyles}>Spent vs Saved</h1>
          <DoughnutChart
            doughnutData={[Number(spent), saved > 0 ? saved : 0]}
            doughnutLabels={["Spent", "Saved"]}
            titleLabel="Savings vs Spent"
          />
          <div>
            <h1 className="font-bold text-green-400 text-2xl">Key Takeaway:</h1>
            <p className="text-white sm:text-xl text-lg">
              This chart shows your monthly cash flow. A powerful financial goal
              is to increase the 'Saved' portion. A popular guideline is the
              50/30/20 rule: 50% for Needs (rent, groceries, utilities) 30% for
              Wants (dining out, hobbies, subscriptions) 20% for Savings & Debt
              Payoff How does your chart compare to this 20% savings goal?
            </p>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <DropDown label="How can I save more?">
              Start by tracking your <strong>Wants</strong> Review your
              subscriptions, try packing lunch a few times a week, or set a
              'no-spend' day. Small changes add up!
            </DropDown>
            <DropDown label="What can I do with my savings?">
              The first step is an <strong>emergency fund</strong>. This is 3-6
              months of your <strong>spent</strong> amount (${Number(spent) * 3}{" "}
              to ${Number(spent) * 6}) saved in an easy-to-access place, like a
              High-Yield Savings Account (HYSA).
            </DropDown>
          </div>
        </div>

        {/* -------COMPOUND INTEREST CARD------- */}

        <div className={cardStyles}>
          <h1 className={titleStyles}>The Power of compound Interest</h1>
          <h1 className="text-xl text-green-300 font-bold text-center mb-4">
            Adjust the slider to see how different interest rates affect your
            savings
          </h1>
          <div className="w-full max-w-md my-4">
            <Slider
              value={interestRate}
              onChange={setInterestRate}
              onMouseUp={setInterestRate}
            />
          </div>
          <BarChart
            titleLabel={`Projected savings at ${interestRate}% interest`}
            barLabels={["5 Years", "10 Years", "15 Years", "20 Years"]}
            barData={[
              calculateFutureValue(5),
              calculateFutureValue(10),
              calculateFutureValue(15),
              calculateFutureValue(20),
            ]}
          />
          <div>
            <h1 className="font-bold text-green-400 text-2xl">Key Takeaway:</h1>
            <p className="text-white sm:text-xl text-lg">
              {saved > 0
                ? `This chart shows your monthly savings of $${saved} growing over time. `
                : "This chart shows your monthly savings growing over time for teaching purposes lets say you save $100. "}
              This is <strong>compound interest</strong>: your money starts
              making money for you. Notice how the growth from 15 to 20 years is
              much larger than the growth from 5 to 10 years. That's the magic
              of compounding. The most important factor is time.
            </p>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <DropDown label="What is compound interest?">
              <span>
                It's the interest you earn on both your original money{" "}
                <strong>AND</strong> the interest you've already earned. It's
                what makes your money <strong>grow exponentially</strong> over
                time, and it's the most powerful tool for building wealth.
              </span>
            </DropDown>
            <DropDown label="Where can I get compound Interest?">
              <p>
                Compound interest is at work in many types of accounts. The main
                difference is the growth rate and risk:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong>High-Yield Savings Accounts: (HYSAs):</strong>
                  These are very safe (FDIC insured) and are perfect for your
                  emergency fund. They offer lower interest rates (like 1-5%),
                  but your money still compounds.
                </li>
                <li>
                  <strong>Investing in the Stock Market: </strong>
                  This is where you see powerful, long-term compounding. By
                  buying low-cost index funds (in a retirement account or
                  brokerage account), your money grows with the market, which
                  has historically averaged 6-10%. This involves risk however
                  because stocks can go down as well.
                </li>
              </ul>
            </DropDown>
          </div>
        </div>

        {/* -------NEW CARD HERE------- */}
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
          <BudgetInputs />
            
        </div>
      </div>
    </>
  );
}

export default App;
