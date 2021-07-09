import logo from './logo.svg';
import './App.css';
import UtilisationState from './utilisation-state/utilisation-state';
import DateDuJour from './date-du-jour/date-du-jour';
import TextColor from './text-color/text-color';

function App() {
  return (
    <div className="App">
      <UtilisationState />

      <DateDuJour />

      <TextColor text='Patrick' />
    </div>
  );
}

export default App;
