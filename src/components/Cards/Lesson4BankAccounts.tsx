import React from "react";
import DropDown from "../DropDown";
import Quiz from "../Quiz";

const BankAccounts = () => {
  return (
    <>
      <h1>What to Do With Savings: Step 2</h1>
      <h2 className="text-green-400 text-3xl font-bold">
        Choosing the Right Account
      </h2>

      <div className="my-4">
        <h3 className="font-bold font-bold text-xl">
          Why Does the Account Matter?
        </h3>
        <p className="text-white sm:text-lg text-base">
          Just like you wouldn't keep milk in a cookie jar, you shouldn't keep
          all your money in one place. Each type of account has a specific job
          based on how <strong>safe</strong> and how <strong>quickly</strong>{" "}
          you need to access the money.
        </p>
        <br />
        <h3 className="font-bold font-bold text-xl">
          The Three Financial Pillars
        </h3>
        <p className="text-white sm:text-lg text-base">
          To manage your money effectively, you'll need three main types of
          accounts. We call them the three pillars of your personal finance
          system.
        </p>
      </div>

      {/* --- Account Comparison Table --- */}
      <div className="bg-stone-900 p-4 rounded-2xl border border-stone-700 w-full overflow-x-auto">
        <h2 className="text-xl text-white my-2 text-center">
          Compare Your Options
        </h2>
        <table className="w-full text-left text-sm text-stone-300">
          <thead className="text-xs uppercase text-stone-400 border-b border-stone-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-2">
                Account Type
              </th>
              <th
                scope="col"
                className="py-3 px-2">
                Purpose
              </th>
              <th
                scope="col"
                className="py-3 px-2">
                Liquidity (Access)
              </th>
              <th
                scope="col"
                className="py-3 px-2">
                Risk/Growth
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-800">
              <th
                scope="row"
                className="py-2 px-2 font-medium text-white">
                Checking
              </th>
              <td className="py-2 px-2">Daily spending & Bills</td>
              <td className="py-2 px-2">Very High (Instant)</td>
              <td className="py-2 px-2">Very Low (VERY little growth)</td>
            </tr>
            <tr className="border-b border-stone-800">
              <th
                scope="row"
                className="py-2 px-2 font-medium text-white">
                Savings (HYSA)
              </th>
              <td className="py-2 px-2">Emergency Fund & Goals</td>
              <td className="py-2 px-2">High (1-2 days)</td>
              <td className="py-2 px-2 text-green-400">Low Risk, Low Growth</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="py-2 px-2 font-medium text-white">
                Brokerage/IRA
              </th>
              <td className="py-2 px-2">Long-Term Investing</td>
              <td className="py-2 px-2">Low (Not for daily use)</td>
              <td className="py-2 px-2 text-red-400">High Risk, High Growth</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- DropDowns  --- */}
      <div className="flex flex-col w-full items-center justify-center my-4">
        <DropDown label="Checking Account: Where the money flows">
          This is your central hub for transactions. You use your debit card,
          pay bills, and deposit your paycheck here.
          <br />
          <br />
          <p className="text-sm text-stone-400">
            <strong>Key Tip:</strong> Don't keep excess savings here! It earns
            almost no interest and it's too easy to spend.
          </p>
        </DropDown>

        <DropDown label="High-Yield Savings Account (HYSA): The safe spot">
          The HYSA is one type of account perfect for your emergency fund and
          any money you plan to spend in the next few years (like a down
          payment). It keeps your cash separate from spending.
          <br />
          <br />
          <ul className="list-disc list-inside">
            <li>
              <strong>FDIC Insured:</strong> Your money is protected by the
              government up to $250,000.
            </li>
            <li>
              <strong>Earns APY:</strong> It gives you a guaranteed return
              (currently 3-5%+) just for letting it sit there.
            </li>
          </ul>
          <br />
        </DropDown>

        <DropDown label="Brokerage/IRA: Where money works for you">
          This is the account you use to buy assets like stocks and mutual
          funds. It is the core tool for building long-term wealth.
          <br />
          <br />
          <ul className="list-disc list-inside">
            <li>
              <span className="text-red-400 font-bold">Not Insured:</span> The
              value can go up or down. Theres a lot more risk involved.
            </li>
            <li>
              <strong>Highest Potential:</strong> Over many years, this is how
              you make your money grow significantly (this leads into Lesson 5:
              Compound Interest).
            </li>
          </ul>
        </DropDown>
        <DropDown label="What about Money Market Accounts (MMAs)?">
          A <strong>Money Market Account (MMA)</strong> is another type of safe,
          interest-bearing account. It's often offered by traditional banks.
          <br />
          <br />
          <ul className="list-disc list-inside">
            <li>
              <strong>Similar to HYSA:</strong> MMAs are also <strong>FDIC Insure</strong> and offer
              competitive interest rates.
            </li>
            <li>
              <strong>Key Difference</strong>: MMAs often include{" "}
              <strong>check-writing</strong> or{" "}
              <strong>debit card access</strong>, making them slightly more
              flexible for large, planned withdrawals.
            </li>
          </ul>
          <p className="text-sm text-stone-400 mt-2">
            In short: An HYSA and an MMA serve the same low-risk purpose, the
            MMA just offers more checking-like features.
          </p>
        </DropDown>
        <DropDown label="How do I choose a bank or brokerage?">
          Focus on <strong>low fees</strong> and <strong>high returns</strong>.
          <br />
          <br />
          <ul className="list-disc list-inside">
            <li className="">
              <strong>For Checking/Savings:</strong> Look for banks that charge{" "}
              <strong> no monthly fees</strong> and offer a competitive{" "}
              <strong> HYSA</strong> interest rate.
            </li>
            <li className="">
              <strong>For Brokerage/IRA:</strong> Choose brokers that charge{" "}
              <strong> $0 commission</strong> for buying stocks and offer a wide
              range of low-cost funds.
            </li>
          </ul>
        </DropDown>
      </div>

      {/* --- Quiz --- */}
      <Quiz
        questions={[
          {
            question:
              "Which type of account is best for paying monthly rent and bills?",
            answers: [
              { text: "Brokerage Account", isAnswer: false },
              { text: "Checking Account", isAnswer: true },
              { text: "HYSA", isAnswer: false },
            ],
            feedback:
              "The Checking Account is designed for quick, daily transactions like paying bills.",
          },
          {
            question:
              "Which account has the highest risk but the highest potential for long-term growth?",
            answers: [
              { text: "Savings Account", isAnswer: false },
              { text: "Brokerage/IRA Account", isAnswer: true },
              { text: "Checking Account", isAnswer: false },
            ],
            feedback:
              "Brokerage accounts (where you invest) carry market risk but offer the highest growth potential over time.",
          },
          {
            question:
              "Money in which account type is typically protected by FDIC insurance?",
            answers: [
              { text: "Stocks in a Brokerage Account", isAnswer: false },
              { text: "HYSA and Checking Accounts", isAnswer: true },
              { text: "Cryptocurrency wallets", isAnswer: false },
            ],
            feedback:
              "Checking and Savings accounts are bank deposits and are FDIC insured up to $250,000.",
          },
        ]}
      />
    </>
  );
};

export default BankAccounts;
