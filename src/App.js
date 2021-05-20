/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
//CONCETTO DI STATE 
import {useState} from 'react';

function App() {
  
  const [numero, setNumero] = useState(0)
  const aumentaNumero = () => {
    setNumero(numero + 7)
    console.log(numero)
  }
  
return (
  <div className="App">
  
    <button onClick= {aumentaNumero} >Cambia Nome</button>
      <h3>Ciao {numero} </h3>
  </div>
  );
  
}


export default App;


