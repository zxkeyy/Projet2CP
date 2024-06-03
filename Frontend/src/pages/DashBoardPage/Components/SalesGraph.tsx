import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import useOrders from "../../../Hooks/UseOrders";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Number of sales per day",
    },
  },
};

const getDates = (startDate: Date, stopDate: Date) => {
  let dateArray: string[] = [];
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(
      new Date(currentDate).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
      })
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

interface Props {
  days: number;
}

const SalesGraph = ({ days }: Props) => {
  const { data: orders } = useOrders();

  const labels: string[] = getDates(
    new Date(new Date().setDate(new Date().getDate() - days)),
    new Date()
  );

  const data = labels?.map((label: string) => {
    return (
      orders
        ?.filter(
          (order: any) =>
            new Date(order.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
            }) == label
        )
        ?.reduce(
          (total: number, obj: any) => total + (obj?.total_price || 0),
          0
        ) ?? 0
    );
  });

  const ordersData = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: data,
        borderColor: "#009688",
        backgroundColor: "#009688",
        tension: 0.3,
      },
    ],
  };

  return <Line options={options} data={ordersData} />;
};

export default SalesGraph;
