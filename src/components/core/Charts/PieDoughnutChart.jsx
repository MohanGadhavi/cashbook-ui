import React, { useEffect, useMemo, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { generateColorPairs } from '@/utils';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        color: '#fff',
        padding: 5,
      },
    },
  },
  layout: {
    padding: 4,
  },
};

const colors = generateColorPairs({
  count: 6,
  alpha: 0.4,
  paletteColor: 'random',
  luminosity: 'light',
});

console.log('COLORSSSSSSSSSSSSSS ', colors);

const getChartData = (rowData) => {
  const labels = [];
  const datsets = [];

  rowData.forEach((subData) => {
    const data = [];
    subData.forEach((item) => {
      labels.push(item.name);
      data.push(item.value);
    });
    datsets.push({
      label: '',
      data: data,
      backgroundColor: generateColorPairs({
        count: subData.length,
        alpha: 0.4,
        paletteColor: 'random',
        luminosity: 'light',
      }).solid,
      borderColor: ['rgba(255, 255, 255, 0.5)'],
      borderWidth: 1,
      hoverOffset: 10,
    });
  });

  return {
    labels: labels,
    datasets: datsets,
  };
};

function PieDoughnutChart({
  data = [],
  chartType = 'doughnut',
  titleText = '',
  total,
}) {
  const [opt, setOpt] = useState(options);

  const mainDivSize = useSelector((state) => state.device.mainDivType);

  useEffect(() => {
    if (mainDivSize === 'mobile') {
      setOpt(options);
    } else {
      const newOpt = { ...options };

      newOpt.plugins.legend = {
        display: true,
        position: 'right',
        labels: {
          color: '#fff',
          padding: 20,
        },
      };
      console.log('newOpt', newOpt);

      setOpt(newOpt);
    }
  }, [mainDivSize]);

  const chartData = useMemo(() => getChartData(data), [data]);

  console.log('Chart Data >>>>>>>>>>>', chartData);
  return (
    <div className="relative mx-auto max-h-[100%] lg:w-[20rem] lg:h-[20rem] flex flex-col justify-center items-center h-full">
      <p className="lg:absolute top-0 text-center text-lg">{titleText}</p>

      {chartType === 'doughnut' ? (
        <Doughnut
          data={chartData}
          options={opt}
          fallbackContent={
            <p className="text-lg text-red-400">Unable to Show Chart</p>
          }
          style={{
            padding: mainDivSize === 'mobile' ? '20px' : '0px',
          }}
        />
      ) : (
        <Pie
          data={chartData}
          options={opt}
          fallbackContent={
            <p className="text-lg text-red-400">Unable to Show Chart</p>
          }
        />
      )}
      <p className="absolute top-1/2 -translate-y-[30%] lg:top-[90%] lg:translate-y-[0px] w-20 lg:w-fit text-wrap lg:text-nowrap text-center text-lg h-fit">
        Total: {total}
      </p>
    </div>
  );
}

export default PieDoughnutChart;
