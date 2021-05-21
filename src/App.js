/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
//CONCETTO DI STATE 
import {useState} from 'react';

function App() {
  const [text, setText] = useState("")
  // evento Target
  const onChangeHandler=(e)=>{
    setText(e.target.value)
    console.log(e.target.value)
  }
  
  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler} value={text} />
      {text}
      <button onClick={()=>setText("")} >Azzera Test</button>
    </div>
    );
  }
  
  export default App;
  
  
  