import React from 'react'
import DoughnutChart from '../Charts/DoughnutChart';
import DropDown from '../DropDown';
import Quiz from '../Quiz';

interface Props{
    income: number;
    spent: number;
    saved:number;
}

const Savings = ({ income, spent, saved}: Props) => {
  return (
    <>
      <h1> The 50/30/20 rule</h1>
      <DoughnutChart
        doughnutData={[50, 30, 20]}
        doughnutLabels={["50% needs", "30% wants", "20% Savings/Debt"]}
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
        <h2 className="font-bold text-green-400 text-2xl">Key Takeaway:</h2>
        <p className="text-white sm:text-xl text-lg">
          A powerful financial goal is to increase the 'Saved' portion. A
          popular guideline is the <strong>50/30/20 rule</strong>: 50% for Needs
          (rent, groceries, utilities) 30% for Wants (dining out, hobbies,
          subscriptions) 20% for Savings & Debt Payoff.{" "}
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
        <strong>Needs</strong> Things that are required to live/work <br /> Ex:
        Rent, groceries, utilities, transportation, basic phone plan
        <br />
        <strong>Wants</strong> Things that are nice to have but not essential
        <br />
        Ex: Restaurants, clothes shopping, streaming, video games, hobbies
      </DropDown>
      <h1> Your Spent vs Saved</h1>
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
          Start by tracking your <strong>Wants</strong>. These are flexible
          expenses that can be reduced without changing your lifestyle
          overnight.
          <br />
          <br />
          Try one small change this month:
          <ul className="list-disc list-inside">
            <li>Cancel or pause 1 subscription</li>
            <li>Reduce dining out by just 1-2 meals per week</li>
            <li>Set a weekly spending limit for fun purchases</li>
          </ul>
          <br />
          Shifting just $20-50 a week moves you closer to that target fast. We
          will dive deeper in this topic in lesson 2.
          {Number(saved) <= 0
            ? " If you spent more than you earned, focus on tracking first awareness saves money we will go into this in the next lesson"
            : ""}
        </DropDown>
        <DropDown label="What can I do with my savings?">
          The first step is building an <strong>emergency fund</strong>. Aim for
          3-6 months of your <strong>Monthly Costs</strong> amount saved about: ($
          {Number(spent) * 3} to ${Number(spent) * 6}). We will go dive deeper into this in lesson 3.
          <br />
          <br />
          After that, here are smart priorities for your savings:
          <ul>
            <li>
              <strong>Pay down high-interest debt</strong> (credit cards, personal loans).
              Paying off 20% interest is like earning 20% guaranteed.
            </li>
            <li>
              <strong>Start investing for growth</strong>—Roth IRA, 401(k)
              match, or low-cost index funds. This is how money works for you
              which you will learn about in the next lesson.
            </li>
            <li>
              <strong>Short-term goals</strong> (travel, first car, new phone).
              If you'll spend it within 1-3 years, keep it in savings—not
              stocks.
            </li>
            <li>
              <strong>Reward yourself</strong> sometimes! Saving is about
              progress, not punishment.
            </li>
          </ul>
          <br />
          Small amounts add up. The key is to give every dollar a job that moves
          you forward. We will dive deeper in this topic in a later lesson.
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
              "Needs are essentials like housing, food, and utilities. Wants are optional expenses like video games they may be nice but not a necessity",
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
    </>
  );
}

export default Savings