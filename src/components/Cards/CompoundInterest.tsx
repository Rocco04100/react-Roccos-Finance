import React, { useState } from 'react'
import DropDown from '../DropDown';
import Quiz from '../Quiz';
import Slider from '../Slider';
import BarChart from '../Charts/BarChart';
interface Props {
    cardStyles?: string;
    titleStyles: string;
    saved: number;

}

const CompoundInterest = ({ titleStyles, saved}: Props) => {
 const [interestRate, setInterestRate] = useState(0);

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
          This is <strong>compound interest</strong>: your money starts making
          money for you. Notice how the growth from 15 to 20 years is much
          larger than the growth from 5 to 10 years. That's the magic of
          compounding. The most important factor is time.
        </p>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <DropDown label="What is compound interest?">
          <span>
            It's the interest you earn on both your original money{" "}
            <strong>AND</strong> the interest you've already earned. It's what
            makes your money <strong>grow exponentially</strong> over time, and
            it's the most powerful tool for building wealth.
          </span>
        </DropDown>
        <DropDown label="Where can I get compound Interest?">
          <p>
            Compound interest is at work in many types of accounts. The main
            difference is the growth rate and risk:
          </p>
          <ul className="list-disc list-outside space-y-2 mt-2 pl-5">
            <li>
              <strong>High-Yield Savings Accounts: (HYSAs):</strong>
              These are very safe (FDIC insured) and are perfect for your
              emergency fund. They offer lower interest rates (like 1-5%), but
              your money still compounds.
            </li>
            <li>
              <strong>Investing in the Stock Market: </strong>
              This is where you see powerful, long-term compounding. By buying
              low-cost index funds (in a retirement account or brokerage
              account), your money grows with the market, which has historically
              averaged 6-10%. This involves risk however because stocks can go
              down as well.
            </li>
            <li>
              <strong>Certificates of Deposit (CDs):</strong> Fixed-term bank
              deposits with a guaranteed interest rate. Interest compounds over
              the term. Low risk, but funds are locked until maturity.
            </li>
            <li>
              <strong>Bonds (Government or Corporate):</strong> Earn interest
              through coupon payments that can be reinvested to compound growth
              over time. Safe or moderate risk depending on type.
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
      
   </>
  );
}

export default CompoundInterest