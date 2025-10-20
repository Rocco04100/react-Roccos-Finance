interface Props {
  income: string;
  setIncome: (value: string) => void;
  spent: string;
  setSpent: (value: string) => void;
}

const Inputs = ({ income, setIncome, spent, setSpent }: Props) => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <h2 className="text-white md:text-2xl sm:text-xl text-lg">
          Monthly Income:{" "}
        </h2>
        <input
          type="text"
          value={income}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*\.?\d{0,2}$/.test(value)) {
              setIncome(value);
            }
          }}
          className="bg-stone-950 rounded-2xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
      </div>
      <div className="flex flex-row gap-3">
        <h2 className=" text-white md:text-2xl sm:text-xl text-lg">
          Money Spent:{" "}
        </h2>
        <input
          type="text"
          value={spent}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*\.?\d{0,2}$/.test(value)) {
              setSpent(value);
            }
          }}
          className="bg-stone-950 rounded-2xl border border-stone-700 text-center outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
      </div>
    </>
  );
};

export default Inputs;
