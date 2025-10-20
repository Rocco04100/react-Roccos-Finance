import Intro from "./components/Intro";
import DoughnutChart from "./components/DoughnutChart";
import Inputs from "./components/Inputs";
import { useState } from "react";
import BarChart from "./components/BarChart";
import Slider from "./components/Slider";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [interestRate, setInterestRate] = useState(0);

  const saved =
    Number(income) - Number(spent) > 0 ? Number(income) - Number(spent) : 0;

  const calculateFutureValue = (years: number) => {
    //Compound interest math helper for bar Chart
    const monthlyPayment = saved; // P
    const monthlyRate = interestRate / 100 / 12; // i
    const numMonths = years * 12; // n

    if (monthlyRate === 0) {
      return monthlyPayment * numMonths;
    }

    const futureValue =
      (monthlyPayment * (Math.pow(1 + monthlyRate, numMonths) - 1)) /
      monthlyRate;

    return Math.round(futureValue * 100) / 100;
  };

  return (
    <>
      <div className="min-h-screen bg-stone-900 py-8 px-4 sm:px-6 md:px-12 flex flex-col items-center"> 
        <div className="border-black-600 text-white bg-stone-800 mx-10 my-10  max-w-4xl w-full rounded-3xl shadow-lg flex flex-col justify-center items-center gap-4 p-8 hover:shadow-2xl">
          <Intro />
          <Inputs
            income={income}
            setIncome={setIncome}
            spent={spent}
            setSpent={setSpent}
          />
        </div>
        <div className=" max-h-150 w-full max-w-5xl flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-3xl p-10 shadow-lg hover:shadow-2xl my-2 ">
          <h1 className="text-3xl text-white font-bold ">Spent vs Saved</h1>
          <DoughnutChart
            doughnutData={[Number(spent), saved]}
            doughnutLabels={["Spent", "Saved"]}
            titleLabel="Savings vs Spent"
          />
        </div>
        <div className="max-h-200 max-w-5xl w-full flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-3xl shadow-lg my-5 sm:p-5 hover:shadow-2xl ">
          <h1 className="text-3xl text-white font-bold text-center mb-4">
            See How Your Money Grows
          </h1>
          <div className="w-full max-w-md my-4">
            <Slider
              value={interestRate}
              onChange={setInterestRate}
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
        </div>

        <div className="border border-black-600 h-150 mx-10 hover:shadow-3xl rounded-3xl">
          slider and chart showing how much you could have if you save different
          percentages
        </div>
      </div>
    </>
  );
}

export default App;
