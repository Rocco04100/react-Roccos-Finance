
import { Doughnut } from "react-chartjs-2";

interface Props {
  doughnutData?: number[];
  titleLabel?: string;
  doughnutLabels?: string[];
  backgroundColors?: string[];
  borderColors?: string[];
}

const DoughnutChart = ({
  doughnutData = [33, 33, 33],
  titleLabel = "My doughnut chart",
  doughnutLabels = ["1", "2", "3"],
  borderColors = ["rgb(135, 135, 135)", "rgb(0, 255, 13)"],
  backgroundColors = ["rgba(104, 109, 104, 0.23)", "rgba(4, 255, 34, 0.23)"],
}: Props) => {
  const data = {
    labels: doughnutLabels,
    datasets: [
      {
        label: titleLabel,
        data: doughnutData,
        borderColor: borderColors,
        backgroundColor: backgroundColors,
        hoverOffset: 50,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
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
    <div className="w-full h-96 flex justify-center">
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
