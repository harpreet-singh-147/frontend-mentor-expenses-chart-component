import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import jsonData from '../../assets/data.json';
import './BarChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = jsonData.map(item => item.day);
const dataValues = jsonData.map(item => item.amount);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      callbacks: {
        title: () => '',
        label: (context: TooltipItem<'bar'>) => {
          return `$${context.parsed.y}`;
        },
      },
      caretSize: 0,
      caretPadding: 15,
      padding: 10,
      xAlign: 'center' as const,
      yAlign: 'bottom' as const,
      bodyFont: {
        size: 15.5,
      },
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        display: true,
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
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: dataValues,
      backgroundColor: 'hsl(10, 79%, 65%)',
    },
  ],
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};
export default BarChart;
