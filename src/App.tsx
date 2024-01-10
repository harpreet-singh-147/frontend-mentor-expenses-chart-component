import DisplayBalance from './components/DisplayBalance/DisplayBalance';
import DisplayChart from './components/DIsplayChart/DisplayChart';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <main className='main'>
      <DisplayBalance />
      <DisplayChart />
      <Footer />
    </main>
  );
}

export default App;
