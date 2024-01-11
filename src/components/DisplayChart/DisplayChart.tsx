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
        <h3 className='chart__footer-heading'>Total this month</h3>
        <div className='chart__footer-content'>
          <div className='chart__footer-line-seperator'></div>
          <p className='chart__footer-total'>$478.33</p>
          <p className='chart__footer-difference-container'>
            <span className='chart__footer__difference-percentage'>+2.4%</span>
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

//  mon tue wed thu fri sat sun Total this month
