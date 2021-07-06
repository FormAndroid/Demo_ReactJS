import logo from './logo.svg';
import './App.css';
import LeapYear from './components/leap-year/leap-year';

function App() {
  return (
    <div className="App">

      <h1>Demo 02</h1>
      <h2>Le rendu dynamique</h2>

      <LeapYear year={2016} />

      <LeapYear year={25_942} />

      <LeapYear year={1999} />

    </div>
  );
}

export default App;
