import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [catFact, setCatFact] = useState('');

  const generateNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setCatFact(data.fact));
  }

  useEffect(() => {
    generateNewFact();
  }, []);

  return (
    <div className="App">
      <div className="fact-box">
        <h2 className='app-name'>Cat-<span>Fact</span></h2>
        <p className='fetched-fact'> {/* Cat-Fact is generated here */} {catFact} </p>
        <button
          className='generate-button'
          onClick={generateNewFact}>
          Generate Cat-Fact
        </button>
      </div>
      <small className='credits'>Designed and Developed by Shaheer</small>
    </div>
  )
}

export default App;
