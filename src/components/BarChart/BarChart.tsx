import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartEvent,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { weeklyData } from '../../assets/data.json';

import './BarChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData] = useState({
    labels: weeklyData.map(({ day }) => day),
    dataValues: weeklyData.map(({ amount }) => amount),
  });

  const currentDay = new Date()
    .toLocaleDateString('en-us', { weekday: 'short' })
    .toLowerCase();

  const barColors = weeklyData.map(({ day }) =>
    day === currentDay ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
  );

  const hoverColors = weeklyData.map(({ day }) =>
    day === currentDay
      ? 'hsla(186, 34%, 60%, 0.613)'
      : 'hsla(10, 79%, 65%, 0.631)'
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: 'hsl(25, 47%, 15%)',
        callbacks: {
          title: () => '',
          label: (context: TooltipItem<'bar'>) => {
            return `$${context.parsed.y}`;
          },
        },
        caretSize: 0,
        caretPadding: 7,
        padding: {
          top: 9,
          bottom: 9,
          left: 10.5,
          right: 10.5,
        },
        xAlign: 'center' as const,
        yAlign: 'bottom' as const,
        bodyFont: {
          size: 18,
          weight: 'bold' as const,
        },
      },
    },
    onHover: (e: ChartEvent, element: []) => {
      const target = e.native?.target as HTMLElement;
      if (target) {
        const cursorStyle = element.length ? 'pointer' : '';
        target.style.cursor = cursorStyle;
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            size: window.innerWidth <= 375 ? 12.5 : 15.5,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        min: 0,
        max: 73,
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: '',
        data: chartData.dataValues,
        backgroundColor: barColors,
        borderRadius: window.innerWidth <= 475 ? 3.5 : 5.5,
        borderSkipped: false,
        hoverBackgroundColor: hoverColors,
      },
    ],
  };
  return <Bar data={data} options={options} />;
};
export default BarChart;
