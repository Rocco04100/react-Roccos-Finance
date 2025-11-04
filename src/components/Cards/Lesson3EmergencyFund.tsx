import React from "react";
import DropDown from "../DropDown";
import Quiz from "../Quiz";


interface Props {
  saved: number; 
  spent: number; 
}

const EmergencyFund = ({ saved, spent }: Props) => {
 
  const monthlyExpenses = spent;

  const threeMonthGoal = monthlyExpenses * 3;
  const sixMonthGoal = monthlyExpenses * 6;
  const progressPercent = (saved / threeMonthGoal) * 100;

  return (
    <>
      <h1>What to Do With Savings: Step 1</h1>
      <h2 className="text-green-400 text-3xl font-bold">
        Build Your Emergency Fund
      </h2>

      <div className="my-4">
        <h3 className="font-bold text-green font-bold text-xl">What is it?</h3>
        <p className="text-white sm:text-lg text-base">
          An emergency fund is money you set aside <strong>only</strong> for
          true emergencies, like a job loss, unexpected medical bill, or urgent
          car repair.
        </p>
        <br />
        <h3 className="font-bold text-green font-bold text-xl">
          Why is it important?
        </h3>
        <p className="text-white sm:text-lg text-base">
          This is your financial safety net. It's what stops a surprise expense
          from forcing you into high-interest debt (like a credit card) just to
          survive.
        </p>
      </div>

      {/* --- Interactive Goal Section --- */}
      <div className="bg-stone-900 p-4 rounded-2xl border border-stone-700 w-full">
        <h2 className="text-xl text-white my-2 text-center">
          Your Emergency Fund Goal
        </h2>
        <p className="text-center text-lg text-stone-300">
          Based on your monthly needs of{" "}
          <strong>${monthlyExpenses.toFixed(2)}</strong>, your goal is 3-6
          months of expenses.
        </p>

        <div className="flex justify-around my-4">
          <div className="text-center">
            <h4 className="text-lg text-stone-400">3-Month Goal</h4>
            <p className="text-2xl text-green-400">
              ${threeMonthGoal.toFixed(2)}
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg text-stone-400">6-Month Goal</h4>
            <p className="text-2xl text-green-500">
              ${sixMonthGoal.toFixed(2)}
            </p>
          </div>
        </div>

        {saved > 0 && (<p className="text-center text-lg text-white">
          If you start an emergency fund with your savings this month,
          you'll have <strong>${saved.toFixed(2)}</strong> saved, which is{" "}
          <strong>${progressPercent.toFixed(1)}%</strong> of your 3-month goal!
        </p>)}
      </div>

      {/* --- DropDowns  --- */}
      <div className="flex flex-col w-full items-center justify-center my-4">
        <DropDown label="Where should I keep this money?">
          The best place is a <strong>High-Yield Savings Account (HYSA)</strong>
          .
          <br />
          <br />
          <ul>
            <li>
              <strong>It's Safe:</strong> It's FDIC insured (up to $250k), so
              you can't lose it.
            </li>
            <li>
              <strong>It's Liquid:</strong> You can typically access it in 1-2
              days (but not so instant that you're tempted to spend it).
            </li>
            <li>
              <strong>It Grows:</strong> It earns 3-5%+ interest, way more than
              a normal checking or savings account.
            </li>
          </ul>
        </DropDown>

        <DropDown label="What counts as a 'real' emergency?">
          <strong>Good Uses:</strong>
          <ul className="list-disc list-inside text-green-300">
            <li>You lose your job</li>
            <li>Your car breaks down</li>
            <li>Urgent medical or dental bill</li>
            <li>Emergency home repair (e.g., burst pipe)</li>
          </ul>
          <br />
          <strong>Not Emergencies:</strong>
          <ul className="list-disc list-inside text-red-300">
            <li>Vacation tickets</li>
            <li>A new video game or TV</li>
            <li>Holiday/birthday gifts</li>
            <li>A non-urgent "want" that's on sale</li>
          </ul>
        </DropDown>

        <DropDown label="Why not just invest this money?">
          Investing is for <strong>growth</strong>, and it has{" "}
          <strong>risk</strong>. Your emergency fund is for{" "}
          <strong>safety</strong>, and it must have <strong>zero risk</strong>.
          You never want to be forced to sell your investments at a loss (e.g.,
          during a market crash) just to pay your rent. Keep them separate!
        </DropDown>

        <DropDown label="What if I have high-interest debt?">
          This is a great question. Most experts recommend a "starter" emergency
          fund of <strong>$1,000</strong> or <strong>one month's needs</strong>{" "}
          ($
          {monthlyExpenses.toFixed(2)}) first.
          <br />
          <br />
          Once you have that small buffer, you can aggressively pay down
          high-interest debt (like credit cards). After the debt is gone, you
          can focus on building your full 3-6 month emergency fund.
        </DropDown>
      </div>

      {/* --- Quiz --- */}
      <Quiz
        questions={[
          {
            question: "What is the primary purpose of an emergency fund?",
            answers: [
              { text: "To save for a vacation", isAnswer: false },
              {
                text: "To handle unexpected, essential expenses",
                isAnswer: true,
              },
              { text: "To invest in the stock market", isAnswer: false },
            ],
            feedback:
              "An emergency fund is your safety net for essentials, like rent or car repairs, if your income stops.",
          },
          {
            question: "Where is the best place to keep your emergency fund?",
            answers: [
              { text: "In your checking account", isAnswer: false },
              {
                text: "In a High-Yield Savings Account (HYSA)",
                isAnswer: true,
              },
              { text: "In stocks or cryptocurrency", isAnswer: false },
            ],
            feedback:
              "An HYSA is perfect because it's safe, separate from your spending, and earns high interest.",
          },
          {
            question: "A 'starter' emergency fund is typically how much?",
            answers: [
              { text: "$100 or less", isAnswer: false },
              { text: "$1,000 or one month's needs", isAnswer: true },
              { text: "A full year of expenses", isAnswer: false },
            ],
            feedback:
              "A $1,000 or 1-month buffer gives you breathing room to attack high-interest debt before building your full fund.",
          },
        ]}
      />
    </>
  );
};

export default EmergencyFund;
