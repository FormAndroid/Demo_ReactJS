import logo from './logo.svg';
import './App.css';
import UtilisationState from './utilisation-state/utilisation-state';
import DateDuJour from './date-du-jour/date-du-jour';

function App() {
  return (
    <div className="App">
      <UtilisationState />

      <DateDuJour />
    </div>
  );
}

export default App;
