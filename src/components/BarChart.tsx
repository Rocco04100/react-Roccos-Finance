//import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface Props {
  income: number;
  spent: number;
  data?: number[];
  lablel?: string;
  labels: string[];
}

const BarChart = ({ income, spent }: Props) => {
  const saved = income - spent;
  const data = {
    labels: ["5 Years", "10 Years", "15 Years", "20 Years"],
    datasets: [
      {
        label: "Future Saved at 0% interest",
        data: [saved * 60, saved * 120, saved * 180, saved * 240],
        backgroundColor: [
          "rgba(4, 255, 34, 0.23)", // bar background color
        ],
        borderColor: "rgb(0, 255, 13)", //bar border outline color
        borderWidth: 1,
      },
    ],
  };
  const options = {
    layout: {
      padding: 5,
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // legend font color
          font: {
            size: 20,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // x-axis font-color
        },
        title: {
          color: "white", // x-axis title color
        },
      },
      y: {
        ticks: {
          color: "white", // y-axis font-color
        },
        title: {
          color: "white", // y-axis title color
        },
      },
    },
  };
  return (
    <div className="w-7/8 h-80 md:h-100 flex flex-col justify-center items-center bg-stone-800 mx-auto rounded-2xl shadow-lg my-5">
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
