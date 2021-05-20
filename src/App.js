/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
//CONCETTO DI STATE 
import {useState} from 'react';

function App() {
  
  const [color, setColor] = useState('green')
  const cambiaColore = () => {
    setColor('gray')
    console.log('black')
  }
  
return (
  <div className="App">
  
    <button onClick= {cambiaColore} >Cambia Nome</button>
      <h3 style = {{ color: color }} >Ciao {} </h3>
  </div>
  );
  
}


export default App;


