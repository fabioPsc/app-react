/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
import {useState} from 'react';

function App() {
  
  const [nome, setNome] = useState('Billy')
  const cambiaNome = () => {
    setNome('Johnny')
    /* console.log(nome) */
  }
  
return (
  <div className="App">
  
    <button onClick= {cambiaNome} >Cambia Nome</button>
      <h3>Ciao {nome} </h3>
  </div>
  );
  
}


export default App;


