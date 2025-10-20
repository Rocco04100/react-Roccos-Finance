// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

interface Props {
  doughnutData?: number[];
  titleLabel?: string;
  doughnutLabels?: string[];
}

const DoughnutChart = ({
  doughnutData = [33,33, 33],
  titleLabel = "My doughnut chart",
  doughnutLabels = ["1", "2", "3"],
}: Props) => {


  const data = {
    labels: doughnutLabels,
    datasets: [
      {
        label: titleLabel,
        data: doughnutData,
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
      <Doughnut
        data={data}
        options={options}
      />
  );
};

export default DoughnutChart;
