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
      $478.33 +2.4% from last month
    </section>
  );
};
export default DisplayChart;

//  mon tue wed thu fri sat sun Total this month
