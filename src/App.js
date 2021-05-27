/* import logo from './logo.svg'; */
import './App.css';
/* import VideoText from './VideoText'; */
//CONCETTO DI STATE 
import {useState} from 'react';
/* import VideoText from './VideoText'; */

function App() {
  const [text, setText] = useState(""); 
  const [textList, setTextList]=useState([])
  // evento Target
  const onChangeHandler=(e)=>{
    setText(e.target.value)
    /* console.log(e.target.value) */
    console.log(e.target)
  }
  // crea un array di elementi
  const addTextHandler=()=>{
    /* console.log('aggiungi text') */
    setTextList([...textList, text]);
    
    // 1. ...textList => copia l'array attuale
    // 2. text => aggiunge text a textList
    setText("")
  }
  return (
    <div className="App">
      
      <input type="text" onChange={onChangeHandler} value={text} />
      
      <button onClick={addTextHandler} >Aggiungi Text</button>
      <ul>
        {textList.map(function(text){
          return <li> {text} </li>
        })}
      </ul>
    </div>
    );
  }
  
  export default App;
  
  
  