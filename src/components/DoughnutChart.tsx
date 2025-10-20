// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

interface Props {
  income: number;
  spent: number;
}

const DoughnutChart = ({ income, spent }: Props) => {
  // strings --> wrap as numbers for later math use

  const saved = income - spent <= 0 ? 0 : income - spent;

  const data = {
    labels: ["Spent", "Saved"],
    datasets: [
      {
        label: "Savings Doughnut Chart",
        data: [spent, saved],
        borderColor: ["rgb(135, 135, 135)", "rgb(0, 255, 13)"],
        backgroundColor: [
          "rgba(104, 109, 104, 0.23)",
          "rgba(4, 255, 34, 0.23)",
        ],
        hoverOffset: 50,
      },
    ],
  };
  const options = {
    layout: {
      padding: 40,
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 20,
          },
        },
      },
    },
  };
  return (
    <div className="w-7/8 h-150 flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-2xl p-10 shadow-lg my-2 ">
      <h1 className="text-3xl text-white font-bold ">Spent vs Saved</h1>
      <Doughnut
        data={data}
        options={options}
        className="text-white"
      />
    </div>
  );
};

export default DoughnutChart;
