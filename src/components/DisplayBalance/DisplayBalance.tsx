import { totalBalance } from '../../assets/data.json';
import logo from '../../assets/images/logo.svg';
import './DisplayBalance.css';

const DisplayBalance = () => {
  return (
    <section className='balance'>
      <div className='balance__balance-container'>
        <h2 className='balance__heading'>My balance</h2>
        <p className='balance__amount'>${totalBalance.toFixed(2)}</p>
      </div>
      <div className='balance__logo-container'>
        <img src={logo} alt='Company Logo' className='balance__logo' />
      </div>
    </section>
  );
};
export default DisplayBalance;
