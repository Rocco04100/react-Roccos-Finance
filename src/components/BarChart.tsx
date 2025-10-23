
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface Props {
  // income: number;
  // spent: number;
  barData?: number[];
  titleLabel?: string;
  barLabels?: string[];
}

const BarChart = ({
  barData = [0, 0, 0, 0],
  titleLabel = "My Bar chart",
  barLabels = ["1", "2", "3", "4"],
}: Props) => {
  // const saved = income - spent;
  const data = {
    labels: barLabels,
    datasets: [
      {
        label: titleLabel,
        data: barData,
        backgroundColor: [
          "rgba(4, 255, 34, 0.23)", // bar background color
        ],
        borderColor: "rgb(0, 255, 13)", //bar border outline color
        borderWidth: 1,
      },
    ],
  };
  const options = {
    animation: {
        duration: 0 // No animation on re-render
      },
    maintainAspectRatio: false,
    layout: {
      padding: 5,
    },

    plugins: {
      legend: {
        labels: {
          color: "white", // legend font color
          font: {
            size: 16,
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
    <div className="w-full h-96 flex justify-center">
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
