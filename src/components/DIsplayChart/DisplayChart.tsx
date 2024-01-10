import './DisplayChart.css';

const DisplayChart = () => {
  return (
    <div className='chart'>
      <header className='chart__header'>
        <h1 className='chart__heading'>Spending - Last 7 days</h1>
      </header>
      mon tue wed thu fri sat sun Total this month $478.33 +2.4% from last month
    </div>
  );
};
export default DisplayChart;
