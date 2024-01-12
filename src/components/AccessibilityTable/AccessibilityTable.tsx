import { weeklyData, totalMonthlySpend } from '../../assets/data.json';
import './AccessibilityTable.css';

interface DataItem {
  id: number;
  day: string;
  amount: number;
}

const AccessibilityTable = () => {
  return (
    <div className='tables'>
      <table className='data-table' aria-label='Weekly Expenses'>
        <caption className='data-table__caption'>Weekly Expenses</caption>
        <thead className='data-table__head'>
          <tr className='data-table__row'>
            <th id='headerDay' className='data-table__header' scope='col'>
              Day
            </th>
            <th id='headerAmount' className='data-table__header' scope='col'>
              Amount
            </th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {weeklyData.map(({ id, day, amount }: DataItem) => {
            return (
              <tr className='data-table__row' key={id}>
                <td className='data-table__cell'>{day}</td>
                <td className='data-table__cell'>${amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className='data-summary' aria-label='Financial Summary'>
        <caption className='data-summary__caption'>Summary</caption>
        <tbody>
          <tr className='data-summary__row'>
            <th className='data-summary__heading' scope='row'>
              Total Balance:
            </th>
            <td className='data-summary__value'>$941</td>
          </tr>
          <tr className='data-summary__row'>
            <th className='data-summary__heading' scope='row'>
              Total Monthly Spend:
            </th>
            <td className='data-summary__value'>${totalMonthlySpend}</td>
          </tr>
          <tr className='data-summary__row'>
            <th className='data-summary__heading' scope='row'>
              Percentage Change:
            </th>
            <td className='data-summary__value'>2.4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AccessibilityTable;
