/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
//CONCETTO DI STATE 
import {useState} from 'react';
import VideoText from './VideoText';

function App() {
  const [text, setText] = useState("")
  // evento Target
  const onChangeHandler=(e)=>{
    setText(e.target.value)
    console.log(e.target.value)
  }
  
  return (
    <div className="App">
      <VideoText title="video di Vivaldi" views="3 mld" published="2 years Ago" user="Fabio Piscini" color="red"/>
      <VideoText title="Le 4 Stagioni di Vivaldi" views="33 mld" published="7 years Ago" user="Claudio tremaglia" color="green"/>
      <input type="text" onChange={onChangeHandler} value={text} />
      {text}
      <button onClick={()=>setText("")} >Azzera Test</button>
    </div>
    );
  }
  
  export default App;
  
  
  