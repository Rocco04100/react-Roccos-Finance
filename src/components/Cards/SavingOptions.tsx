import React from "react";

const SavingsOptions = () => {
  return (
    <>
      <h1 className="text-xl text-white mb-4">Savings Options</h1>
      <h1>This card is a work in progress</h1>
      <div className="bg-stone-900 p-4 rounded-2xl border border-stone-700 w-full max-w-md mx-auto my-6">
        <ul className="list-disc pl-5 text-white space-y-2">
          <li>
            <strong>Emergency Fund:</strong> Save at least 3-6 months of living
            expenses to cover unexpected situations.
          </li>
          <li>
            <strong>Retirement Account:</strong> Contribute regularly to a
            401(k) or IRA to build your retirement savings.
          </li>
          <li>
            <strong>High-Interest Savings Account:</strong> Keep your savings in
            an account that offers higher interest rates to grow your money
            faster.
          </li>
          <li>
            <strong>Automate Savings:</strong> Set up automatic transfers from
            your checking to your savings account to make saving effortless.
          </li>
          <li>
            <strong>Invest Wisely:</strong> Consider investing in stocks, bonds,
            or mutual funds to potentially increase your returns over time.
          </li>
        </ul>
      </div>
    </>
  );
};

export default SavingsOptions;
