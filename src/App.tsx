import Intro from "./components/Intro";
import DoughnutChart from "./components/DoughnutChart";
import Inputs from "./components/Inputs";
import { useState } from "react";
import BarChart from "./components/BarChart";
import Slider from "./components/Slider";
import DropDown from "./components/DropDown";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Quiz from "./components/Quiz";
//import BudgetInputs from "./components/BudgetInputs";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [interestRate, setInterestRate] = useState(0);
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
  text-3xl 
  text-white 
  font-bold
  `;
  const buttonStyles = `
  bg-stone-950 text-2xl px-5 text-green-400 font-bold rounded-3xl border border-stone-400 hover:bg-stone-900`;

  const saved = Number((Number(income) - Number(spent)).toFixed(2));

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
  const handleNext = () => {
    if (income == "" && spent == "") {
      alert(
        "Please enter a Monthly Income and Monthly Spent. You can use fake numbers for learning purposes"
      );
      return;
    }else{
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
            <div className="flex flex-row gap-10">
              <button
                className={buttonStyles}
                onClick={handleNext}>
                Next
              </button>
            </div>
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
            <h1 className={titleStyles}> The 50/30/20 rule</h1>
            <DoughnutChart
              doughnutData={[50, 30, 20]}
              doughnutLabels={[
                "50% needs",
                "30% wants",
                "20% Savings/Debt",
              ]}
              titleLabel="Savings vs Spent"
              borderColors={[
                "rgb(180, 80, 80)",
                "rgb(80, 90, 160)",
                "rgb(0, 220, 80)",
              ]}
              backgroundColors={[
                "rgba(180, 80, 80, 0.4)",
                "rgba(80, 90, 160, 0.4)",
                "rgba(0, 220, 80, 0.35)",
              ]}
            />
            <div>
              <h1 className="font-bold text-green-400 text-2xl">
                Key Takeaway:
              </h1>
              <p className="text-white sm:text-xl text-lg">
                A powerful financial goal is to increase the 'Saved' portion. A
                popular guideline is the <strong>50/30/20 rule</strong>: 50% for
                Needs (rent, groceries, utilities) 30% for Wants (dining out,
                hobbies, subscriptions) 20% for Savings & Debt Payoff.{" "}
                {Number(income) > 0 &&
                  `Based on your monthly income you have an ideal budget for you is $${(
                    Number(income) / 2
                  ).toFixed(2)} for needs, $${(Number(income) * 0.3).toFixed(
                    2
                  )} for wants, and $${(Number(income) * 0.2).toFixed(2)} `}
                How does your chart compare to this 20% savings goal?
              </p>
            </div>
            <DropDown label="What counts as a need vs want?">
              <strong>Needs</strong> Things that are required to live/work{" "}
              <br /> Ex: Rent, groceries, utilities, transportation, basic phone
              plan
              <br />
              <strong>Wants</strong> Things that are nice to have but not
              essential
              <br />
              Ex: Restaurants, clothes shopping, streaming, video games, hobbies
            </DropDown>
            <h1 className={titleStyles}> Your Spent vs Saved</h1>
            <DoughnutChart
              doughnutData={[Number(spent), saved > 0 ? saved : 0]}
              doughnutLabels={["Spent", "Saved"]}
              titleLabel="Savings vs Spent"
            />
            <p className="text-white sm:text-xl text-lg">
              You're saving{" "}
              <strong>
                {` ${
                  Number(saved) > 0
                    ? ((Number(saved) / Number(income)) * 100).toFixed(2)
                    : 0
                }% `}
              </strong>{" "}
              think about how this compares to the 50/30/20 rule
            </p>

            <div className="flex flex-col w-full items-center justify-center">
              <DropDown label="How can I save more?">
                Start by tracking your <strong>Wants</strong>. These are
                flexible expenses that can be reduced without changing your
                lifestyle overnight.
                <br />
                <br />
                Try one small change this month:
                <ul className="list-disc list-inside">
                  <li>Cancel or pause 1 subscription</li>
                  <li>Reduce dining out by just 1-2 meals per week</li>
                  <li>Set a weekly spending limit for fun purchases</li>
                </ul>
                <br />
                Shifting just $20-50 a week moves you closer to that target
                fast.
                {Number(saved) <= 0
                  ? " If you spent more than you earned, focus on tracking first awareness saves money"
                  : ""}
              </DropDown>
              <DropDown label="What can I do with my savings?">
                The first step is building an <strong>emergency fund</strong>.
                Aim for 3-6 months of your <strong>spent</strong> amount saved
                ($
                {Number(spent) * 3} to ${Number(spent) * 6}). Keep it in a safe,
                easy-access account like a High-Yield Savings Account (HYSA).
                <br />
                <br />
                After that, here are smart priorities for your savings:
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Pay down high-interest debt</strong> (credit cards,
                    BNPL). Paying off 20% interest is like earning 20%
                    guaranteed.
                  </li>
                  <li>
                    <strong>Start investing for growth</strong>—Roth IRA, 401(k)
                    match, or low-cost index funds. This is how money works for
                    you which you will learn about in the next lesson.
                  </li>
                  <li>
                    <strong>Short-term goals</strong> (travel, first car, new
                    phone). If you'll spend it within 1-3 years, keep it in
                    savings—not stocks.
                  </li>
                  <li>
                    <strong>Reward yourself</strong> sometimes! Saving is about
                    progress, not punishment.
                  </li>
                </ul>
                <br />
                Small amounts add up. The key is to give every dollar a job that
                moves you forward.
              </DropDown>
            </div>
            <Quiz
              questions={[
                {
                  question: "Which of these sound like a Need?",
                  answers: [
                    { text: "Rent", isAnswer: true },
                    { text: "PS5", isAnswer: false },
                    { text: "Movie Ticket", isAnswer: false },
                    { text: "Video Games", isAnswer: false },
                  ],
                  feedback:
                    "Needs are essentials like houseing, food, and utiilities. Wants are optional expenses like video games they may be nice but not a necesity",
                },
                {
                  question:
                    "If you spend less than your income, what should you do with the extra money?",
                  answers: [
                    { text: "Buy more video games", isAnswer: false },
                    { text: "Spend it all on fun activities", isAnswer: false },
                    { text: "Save it", isAnswer: true },
                    { text: "Eat out more", isAnswer: false },
                  ],
                  feedback:
                    "Extra money should go into savings or paying down debt to help your financial future! Use the 50/30/20 rule to determine if you can afford to spend it on wants or better save extra money investing in your future!",
                },
                {
                  question:
                    "According to the 50/30/20 rule, what percentage of your income should go to savings/paying off debt?",
                  answers: [
                    { text: "10%", isAnswer: false },
                    { text: "20%", isAnswer: true },
                    { text: "30%", isAnswer: false },
                    { text: "50%", isAnswer: false },
                  ],
                  feedback:
                    "The 50/30/20 rule suggests 20% of your income should go toward savings or paying off debt.",
                },
              ]}
            />
            <div className="flex flex-row gap-10">
              <button
                className={buttonStyles}
                onClick={handleBack}>
                Back
              </button>
              <button
                className={buttonStyles}
                onClick={handleNext}>
                Next
              </button>
            </div>
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
              <h1 className="font-bold text-green-400 text-2xl">
                Key Takeaway:
              </h1>
              <p className="text-white sm:text-xl text-lg">
                {saved > 0
                  ? `This chart shows your monthly savings of $${saved} growing over time. `
                  : "This chart shows your monthly savings growing over time for teaching purposes lets say you save $100. "}
                This is <strong>compound interest</strong>: your money starts
                making money for you. Notice how the growth from 15 to 20 years
                is much larger than the growth from 5 to 10 years. That's the
                magic of compounding. The most important factor is time.
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
                  Compound interest is at work in many types of accounts. The
                  main difference is the growth rate and risk:
                </p>
                <ul className="list-disc list-outside space-y-2 mt-2 pl-5">
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
                  <li>
                    <strong>Certificates of Deposit (CDs):</strong> Fixed-term
                    bank deposits with a guaranteed interest rate. Interest
                    compounds over the term. Low risk, but funds are locked
                    until maturity.
                  </li>
                  <li>
                    <strong>Bonds (Government or Corporate):</strong> Earn
                    interest through coupon payments that can be reinvested to
                    compound growth over time. Safe or moderate risk depending
                    on type.
                  </li>
                </ul>
              </DropDown>
            </div>
            <Quiz
              questions={[
                {
                  question: "What is compound interest?",
                  answers: [
                    {
                      text: "Interest earned only on your initial deposit",
                      isAnswer: false,
                    },
                    {
                      text: "Interest earned on your initial deposit and on interest already earned",
                      isAnswer: true,
                    },
                    { text: "A type of loan fee", isAnswer: false },
                    {
                      text: "Money that loses value over time",
                      isAnswer: false,
                    },
                  ],
                  feedback:
                    "Compound interest is the interest you earn on both your original money and the interest that has already accumulated. This is what makes savings grow exponentially over time.",
                },
                {
                  question:
                    "Which factor has the biggest impact on compound interest growth?",
                  answers: [
                    { text: "Time (how long you invest)", isAnswer: true },
                    { text: "The color of your bank card", isAnswer: false },
                    {
                      text: "The type of money (cash vs. digital)",
                      isAnswer: false,
                    },
                    {
                      text: "The day of the month you deposit",
                      isAnswer: false,
                    },
                  ],
                  feedback:
                    "Time is the most powerful factor in compound interest. The longer your money is invested, the more interest it can earn on itself.",
                },
                {
                  question:
                    "Which of these accounts can use compound interest to grow your money?",
                  answers: [
                    {
                      text: "High-Yield Savings Account (HYSA)",
                      isAnswer: true,
                    },
                    { text: "Index Fund Retirement Account", isAnswer: true },
                    {
                      text: "Checking account with no interest",
                      isAnswer: false,
                    },
                    { text: "Under your mattress", isAnswer: false },
                  ],
                  feedback:
                    "Compound interest works in accounts that earn interest or investment returns. Safe options include HYSAs, and higher-growth options include investment accounts like index funds.",
                },
              ]}
            />
            <div className="flex flex-row gap-10">
              <button
                className={buttonStyles}
                onClick={handleBack}>
                Back
              </button>
            </div>
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
