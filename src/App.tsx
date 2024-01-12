import AccessibilityTable from './components/AccessibilityTable/AccessibilityTable';
import DisplayBalance from './components/DisplayBalance/DisplayBalance';
import DisplayChart from './components/DisplayChart/DisplayChart';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <main className='main'>
      <div className='container'>
        <DisplayBalance />
        <DisplayChart />
        <AccessibilityTable />
        <Footer />
      </div>
    </main>
  );
}

export default App;
