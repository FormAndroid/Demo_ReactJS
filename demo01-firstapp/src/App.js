import './App.css';
import ElementStyle from './components/element-style/element-style';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      
      <Welcome name="Zaza" />

      <ElementStyle />
      <ElementStyle nb1={20} nb2={1} />

      {/* 
        Exemple d'erreur de type => les nombres sont en format string
        <ElementStyle nb1="10" nb2="11" />
      */}

    </div>
  );
}

export default App;
