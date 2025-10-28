import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

interface Props {
  spent?: number;
}

const BudgetInputs = ({ spent = 0 }: Props) => {
  interface Transaction {
    name: string;
    amount: number;
    type: "Want" | "Need";
  }

  const inputStyles = `bg-stone-950 rounded-xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 p-1`;

  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState<"Want" | "Need">(
    "Want"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAdd = () => {
    if (transactionName == "") {
      setErrorMessage("Please set a name for the transaction");
      return;
    } else if (transactionAmount <= 0 && !isNaN(transactionAmount)) {
      setErrorMessage(
        "Please set a non 0 and positive value for the transaction amount"
      );
      return;
    } else if (transactionName.length > 12) {
      setErrorMessage(
        "Please a shorter name abreviations are okay for our purposes"
      );
      return;
    } else if (spent - (transactionsTotal + transactionAmount) < 0) {
      setErrorMessage("Thats more money than it says you spent this month!");
      return;
    }
    setTransactions([
      ...transactions,
      {
        name: transactionName,
        amount: transactionAmount,
        type: transactionType as "Want" | "Need",
      },
    ]);
    
    setTransactionName("");
    setTransactionAmount(0);
    setTransactionType("Want");
    setErrorMessage("");
  };

  const handleRemove = (indexToRemove: number) => {
    const newList = transactions.filter((_, index) => {
      return index != indexToRemove;
    });
    setTransactions(newList);
  };
  const transactionsTotal = transactions.reduce((sum, t) => {
    return sum + t.amount;
  }, 0);
  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full">
        <h1>
          Spending for the month left unaccounted for $
          {spent - transactionsTotal}
        </h1>
        <div className="flex flex-row gap-3 text-white max-w-9/10 text-center">
          <div className="flex flex-col gap-1 min-w-30">
            <h1 className="">Name</h1>
            <input
              type="text"
              name="trasactionName"
              placeholder="Rent"
              id="name"
              value={transactionName}
              className={inputStyles}
              onChange={(e) => {
                setTransactionName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-40">
            <h1>
              <h1>Transaction Amount</h1>
            </h1>
            <CurrencyInput
              id="spent"
              name="spent"
              prefix="$"
              placeholder="$0.00"
              decimalsLimit={2}
              className={inputStyles}
              value={transactionAmount}
              onValueChange={(value) => {
                if (!isNaN(Number(value))) {
                  setTransactionAmount(Number(value));
                } else {
                  setTransactionAmount(0);
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1>
              <h1>Type</h1>
            </h1>
            <select
              name="wantOrNeed"
              id="type"
              className={inputStyles}
              value={transactionType}
              onChange={(e) => {
                setTransactionType(e.target.value as "Want" | "Need");
              }}>
              <option value="want">Want</option>
              <option value="need">Need</option>
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <button
              className={`px-2 text-green-400 bg-stone-950 rounded-2xl min-w-10 hover:bg-stone-900 transition border border-stone-700`}
              onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
        <h1 className="text-red-300">{errorMessage}</h1>

        <div className="bg-stone-900 p-4 rounded-2xl border border-stone-700 w-9/10">
          <h1 className="text-xl text-white my-2">Transactions:</h1>
          {transactions.map((t, i) => (
            <div
              className="flex flex-row justify-between text-green bg-stone-900 rounded-2xl min-w-20 transition border border-stone-700 px-2 text-lg"
              key={i}>
              <p className="">
                {t.name}:<span className="text-red-300"> ${t.amount} </span>(
                {t.type})
              </p>
              <button
                onClick={() => handleRemove(i)}
                className="text-red-400 hover:text-red-500">
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BudgetInputs;
