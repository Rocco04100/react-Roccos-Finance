import Intro from "./components/Intro";
import DoughnutChart from "./components/DoughnutChart";
import Inputs from "./components/Inputs";
import { useState } from "react";
import BarChart from "./components/BarChart";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
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

        <DoughnutChart
          income={Number(income)}
          spent={Number(spent)}
        />
        <BarChart
          income={Number(income)}
          spent={Number(spent)}
        />

        <div className="border border-black-600 h-150 mx-10">
          slider and chart showing how much you could have if you save different
          percentages
        </div>
      </div>
    </>
  );
}

export default App;
