import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const getChartData = (rowData) => {
  const months = [];
  const expenses = [];

  rowData.forEach((subData) => {
    months.push(subData.month);
    expenses.push(subData.expense);
  });

  return {
    labels: months,
    datasets: [
      {
        label: 'Expense',
        data: expenses,
        backgroundColor: 'rgba(255, 50, 100, 1)',
        borderRadius: 10,
      },
    ],
  };
};

function BarChart({ titleText = '', data = [] }) {
  const [opt, setOpt] = useState(options);

  const mainDivSize = useSelector((state) => state.device.mainDivType);

  useEffect(() => {
    if (mainDivSize === 'mobile') {
      setOpt(options);
    } else {
      setOpt((prev) => ({
        ...prev,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#fff',
              padding: 20,
            },
          },
        },
      }));
    }
  }, [mainDivSize]);

  const chartData = useMemo(() => getChartData(data), [data]);

  return (
    <div className="relative mx-auto xl:px-10  max-w-[100%] max-h-[100%] flex justify-center items-center h-full ">
      <p className="absolute top-0 lg:left-[45%]">{titleText}</p>
      <Bar
        title="Expenses Chart"
        data={chartData}
        options={opt}
        className=" "
        fallbackContent={
          <p className="text-lg text-red-400">Unable to Show Chart</p>
        }
        height={mainDivSize === 'mobile' ? '70%' : ''}
        width={'100%'}
      />
    </div>
  );
}

export default BarChart;
