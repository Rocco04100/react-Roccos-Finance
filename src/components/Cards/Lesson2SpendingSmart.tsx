import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import DoughnutChart from "../Charts/DoughnutChart";
import Quiz from "../Quiz";
import DropDown from "../DropDown";

interface Props {
  spent?: number;
  saved: number;
  income: number;
}

const SpendingSmart = ({ spent = 0, saved, income }: Props) => {
  interface Transaction {
    name: string;
    amount: number;
    type: "Want" | "Need";
  }

  const inputStyles = `bg-stone-950 rounded-xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-1`;

  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState<"Want" | "Need">(
    "Want"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [wantsTotal, setWantsTotal] = useState(0);
  const [needsTotal, setNeedsTotal] = useState(0);

  const handleAdd = () => {
    const amount = Number(transactionAmount)
    if (transactionName == "") {
      setErrorMessage("Please set a name for the transaction");
      return;
    } else if (amount <= 0 && !isNaN(amount)) {
      setErrorMessage(
        "Please set a non 0 and positive value for the transaction amount"
      );
      return;
    } else if (transactionName.length > 12) {
      setErrorMessage(
        "Please a shorter name abbreviations are okay for our purposes"
      );
      return;
    } else if (spent - (transactionsTotal + amount) < 0) {
      setErrorMessage("Thats more money than you said you spent this month!");
      return;
    }

    if (transactionType === "Want") {
      setWantsTotal(wantsTotal + amount);
    } else if (transactionType === "Need") {
      setNeedsTotal(needsTotal + amount);
    }
    setTransactions([
      ...transactions,
      {
        name: transactionName,
        amount: amount,
        type: transactionType as "Want" | "Need",
      },
    ]);

    setTransactionName("");
    setTransactionAmount("");
    setTransactionType("Want");
    setErrorMessage("");
  };

  const handleRemove = (indexToRemove: number) => {
    const newList = transactions.filter((_, index) => {
      return index != indexToRemove;
    });
    if (transactions[indexToRemove].type == "Want") {
      setWantsTotal(wantsTotal - transactions[indexToRemove].amount);
    }
    if (transactions[indexToRemove].type == "Need") {
      setNeedsTotal(needsTotal - transactions[indexToRemove].amount);
    }
    setTransactions(newList);
  };
  const transactionsTotal = transactions.reduce((sum, t) => {
    return sum + t.amount;
  }, 0);

  return (
    <>
      <h1>Spending Smart</h1>
      <h3 className="text-lg text-white text-center sm:text-xl">
        The best way to start spending your money smart is to start looking at
        where it is going. Use this tool to go through your spending this month
        and determine if it was a want or a need.
      </h3>
      <DropDown label="What counts as a Need vs Want?">
        <strong>Needs:</strong> Required to live/work
        <br />
        <strong>Wants:</strong> Nice to have but optional
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1">
          <div className="bg-stone-800 p-2 rounded-lg hover:bg-stone-700 transition ">
            <strong>Need:</strong> Rent 🏠
          </div>
          <div className="bg-stone-800 p-2 rounded-lg hover:bg-stone-700 transition ">
            <strong>Want:</strong> Netflix Subscription 🎬
          </div>
          <div className="bg-stone-800 p-2 rounded-lg hover:bg-stone-700 transition ">
            <strong>Need:</strong> Groceries 🥦
          </div>
          <div className="bg-stone-800 p-2 rounded-lg hover:bg-stone-700 transition">
            <strong>Want:</strong> New Video Game 🎮
          </div>
        </div>
      </DropDown>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-row flex-1 flex-wrap text-white w-full text-center bg-stone-900 min-h-40 border border-stone-700 px-1 rounded-xl justify-center text-xs sm:text-sm md:text-md">
          <div className="flex flex-col gap-1 justify-center">
            <h2 className="">Name</h2>
            <input
              type="text"
              name="transactionName"
              placeholder="XXX"
              id="name"
              value={transactionName}
              className={inputStyles}
              onChange={(e) => {
                setTransactionName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h2 className="">Transaction Amount</h2>
            <CurrencyInput
              id="spent"
              name="spent"
              prefix="$"
              placeholder="$0.00"
              decimalsLimit={2}
              className={inputStyles}
              value={transactionAmount}
              onValueChange={(value) => {
                setTransactionAmount(value || "0");
              }}
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h2>Type</h2>

            <select
              name="wantOrNeed"
              id="type"
              className={inputStyles}
              value={transactionType}
              onChange={(e) => {
                setTransactionType(e.target.value as "Want" | "Need");
              }}>
              <option value="Want">Want</option>
              <option value="Need">Need</option>
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className={`px-4 py-1 mt-5 text-green-400 bg-stone-950 rounded-2xl hover:bg-stone-800 transition border border-stone-700 font-bold`}
              onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
        <h2 className="text-green-500 text-lg text-white">
          Spending for the month left unaccounted for{" "}
          <strong> ${spent - transactionsTotal}</strong>
        </h2>
        <h3 className="text-red-300">{errorMessage}</h3>
        {transactions.length > 0 && (
          <div className="bg-stone-900 p-4 rounded-2xl border border-stone-700 w-9/10">
            <h2 className="text-xl text-white my-2">Transactions:</h2>
            {transactions.map((t, i) => (
              <div
                className="flex flex-row justify-between text-green bg-stone-900 rounded-2xl min-w-20 transition border border-stone-700 px-2 text-lg"
                key={i}>
                <p className="">
                  <strong>{t.name}</strong>:
                  <span className="text-red-300"> ${t.amount} </span>({t.type})
                </p>
                <button
                  onClick={() => handleRemove(i)}
                  className="text-red-400 hover:text-red-500">
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <h1>Your Wants vs Needs</h1>
      <DoughnutChart
        doughnutData={[needsTotal, wantsTotal, saved > 0 ? saved : 0]}
        doughnutLabels={[
          `${((needsTotal / income) * 100).toFixed(2)}% needs`,
          `${((wantsTotal / income) * 100).toFixed(2)}% wants`,
          `${
            income - transactionsTotal >= 0
              ? (((income - transactionsTotal) / income) * 100).toFixed(2)
              : 0
          }% Savings/Debt`,
        ]}
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
      {/* Key Takeaway */}
      <div className="my-4">
        <h2 className="font-bold text-green-400 text-xl">Key Takeaway:</h2>
        <p className="text-white sm:text-lg text-base">
          Tracking your spending is the most important part of trying to save
          more. You're spending{" "}
          <strong>{((spent / income) * 100).toFixed(2)}%</strong> of your
          income. If you're in a money tight situation the most important first
          step to get out is knowing where every dime and dollar goes, then
          focus on limiting spending on wants.
        </p>
      </div>
      {/* DropDown sections */}
      <div className="flex flex-col w-full gap-4">
        <DropDown label="Examples of Reducing Wants">
          <ul>
            <li>
              <strong>Pause unnecessary subscriptions:</strong> Skip Netflix or
              Spotify for a month. You could save $15–$20!
            </li>
            <li>
              <strong>Cook at home:</strong> Instead of ordering takeout twice a
              week, cook meals at home to save $30+.
            </li>
            <li>
              <strong>Set a weekly limit:</strong> Only spend $25 on
              entertainment or treats each week.
            </li>
          </ul>
          <br />
          Saving is up to your decisions. Being smart with your spending is how
          you can <strong> invest in your future</strong>.
        </DropDown>
        <DropDown label="What if My Needs Are Too High?">
          <ul className="list-disc pl-5">
            <li>
              <strong>Reevaluate your subscriptions and bills:</strong> Are
              there any essential services you can downgrade or negotiate?
              Example: switch to a cheaper phone or internet plan.
            </li>
            <li>
              <strong>Look for cheaper alternatives:</strong> Shop at discount
              grocery stores or consider meal prepping to reduce food costs.
            </li>
            <li>
              <strong>Consider increasing your income:</strong> Pick up extra
              work, freelance, or sell unused items to balance your budget.
            </li>
            <li>
              <strong>Prioritize needs:</strong> Focus on absolute necessities
              first, then try to reduce non-critical needs temporarily.
            </li>
          </ul>
          <br />
          High needs aren't necessarily bad, but knowing them allows you to make
          smarter financial decisions.
        </DropDown>
      </div>

      {/* Quiz */}
      <Quiz
        questions={[
          {
            question: "Which of these is a Need?",
            answers: [
              { text: "Groceries", isAnswer: true },
              { text: "Movie Ticket", isAnswer: false },
              { text: "Video Game", isAnswer: false },
            ],
            feedback:
              "Needs are essentials like food and housing. Wants are optional, like entertainment.",
          },
          {
            question:
              "If you have extra money after covering needs, what should you do?",
            answers: [
              { text: "Spend it all on wants", isAnswer: false },
              { text: "Save or invest it", isAnswer: true },
              { text: "Ignore it", isAnswer: false },
            ],
            feedback:
              "Its okay to spend money on wants BUT remember the 50/30/20 rule and try to save at the very least 20% of your income. Remember saving is investing in your future.",
          },
          {
            question:
              "Which of these is a good way to reduce spending on needs?",
            answers: [
              { text: "Cancel your rent", isAnswer: false },
              {
                text: "Buy generic groceries instead of brand-name",
                isAnswer: true,
              },
              { text: "Skip paying utilities", isAnswer: false },
            ],
            feedback:
              "You can save on needs by choosing cheaper alternatives, like generic groceries, without compromising essentials.",
          },
        ]}
      />
    </>
  );
};

export default SpendingSmart;
