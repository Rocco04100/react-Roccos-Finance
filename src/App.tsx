import Intro from "./components/Intro";
import DoughnutChart from "./components/DoughnutChart";
import Inputs from "./components/Inputs";
import { useState } from "react";
import BarChart from "./components/BarChart";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const saved =
    Number(income) - Number(spent) > 0 ? Number(income) - Number(spent) : 0;
  return (
    <>
      <div className="md:w-9/10 bg-stone-900 md:mx-auto sm:my-5 w-full sm:rounded-2xl shadow-lg py-5 sm:p-10 ">
        <Intro />
        <Inputs
          income={income}
          setIncome={setIncome}
          spent={spent}
          setSpent={setSpent}
        />
        <div className="w-7/8 h-150 flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-2xl p-10 shadow-lg my-2 ">
          <h1 className="text-3xl text-white font-bold ">Spent vs Saved</h1>
          <DoughnutChart
            doughnutData={[Number(spent), saved]}
            doughnutLabels={["Spent", "Saved"]}
            titleLabel="Savings vs Spent"
          />
        </div>
        <div className="w-7/8 h-80 md:h-100 flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-2xl shadow-lg my-5">
          <BarChart
            titleLabel="How much you will have in years at 0% interest"
            barLabels={["5 Years", "10 Years", "15 Years", "20 Years"]}
            barData={[saved * 60, saved * 120, saved * 180, saved * 240]}
          />
        </div>

        <div className="border border-black-600 h-150 mx-10">
          slider and chart showing how much you could have if you save different
          percentages
        </div>
      </div>
    </>
  );
}

export default App;
