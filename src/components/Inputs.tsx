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
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 items-center">
        <span className="text-white md:text-2xl sm:text-xl text-lg">
          Monthly Income:{" "}
        </span>
        <CurrencyInput
          id="income"
          name="income"
          prefix="$"
          placeholder="$0.00"
          value={income}
          decimalsLimit={2}
          onValueChange={(value) => handleChange(value, setIncome)}
          className="bg-stone-950 rounded-2xl border border-stone-700 text-center text-green-300 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        <span className=" text-white md:text-2xl sm:text-xl text-lg">
          Monthly Costs:{" "}
        </span>
        <CurrencyInput
          id="spent"
          name="spent"
          prefix="$"
          placeholder="$0.00"
          value={spent}
          decimalsLimit={2}
          onValueChange={(value) => handleChange(value, setSpent)}
          className=" bg-stone-950 rounded-2xl border border-stone-700 text-red-300 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-red"
        />
      </div>
    </>
  );
};

export default Inputs;
