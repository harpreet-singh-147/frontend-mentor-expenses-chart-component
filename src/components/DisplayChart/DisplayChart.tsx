import {
  totalMonthlySpend,
  monthlyPercentageChange,
} from '../../assets/data.json';
import BarChart from '../BarChart/BarChart';

import './DisplayChart.css';

const DisplayChart = () => {
  return (
    <section className='chart'>
      <header className='chart__header'>
        <h1 className='chart__heading'>Spending - Last 7 days</h1>
      </header>
      <div className='chart__container'>
        <BarChart />
      </div>
      <footer className='chart__footer'>
        <h2 className='chart__footer-heading'>Total this month</h2>
        <div className='chart__footer-content'>
          <div className='chart__footer-line-seperator'></div>
          <p className='chart__footer-total'>${totalMonthlySpend.toFixed(2)}</p>
          <p className='chart__footer-difference-container'>
            <span className='chart__footer__difference-percentage'>
              +{monthlyPercentageChange.toFixed(1)}%
            </span>
            <span className='chart__footer__difference-description'>
              from last month
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
};
export default DisplayChart;
