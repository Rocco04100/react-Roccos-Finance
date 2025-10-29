import CurrencyInput from "react-currency-input-field";

interface Props {
  income: string;
  setIncome: (value: string) => void;
  spent: string;
  setSpent: (value: string) => void;
}

const Inputs = ({ income, setIncome, spent, setSpent }: Props) => {
  
  const handleChange = (
    value: string | undefined,
    setter: (value: string) => void
  ) => {
    setter(value || "")
  }

  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-4">
          <span className=" text-white md:text-2xl sm:text-xl text-lg">
            Money Spent:{" "}</span>
          <span className="text-white md:text-2xl sm:text-xl text-lg">
            Monthly Income:{" "}
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-7">
          <CurrencyInput
            id="spent"
            name="spent"
            prefix="$"
            placeholder="$0.00"
            value={spent}
            decimalsLimit={2}
            onValueChange={(value) => handleChange(value, setSpent)}
            className="bg-stone-950 rounded-2xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-red"
          />
          <CurrencyInput
            id="income"
            name="income"
            prefix="$"
            placeholder="$0.00"
            value={income}
            decimalsLimit={2}
            onValueChange={(value) => handleChange(value, setIncome)}
            className="bg-stone-950 rounded-2xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>
      </div>
    </>
  );
};

export default Inputs;
