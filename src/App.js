/* import logo from './logo.svg'; */
import './App.css';
import VideoText from './VideoText';



function App() {
  
  const saluta = () => {
    console.log('ciao mondo')
  }

  return (
    <div className="App">
      {/* Aggiungere eventi */}
      <button onClick={saluta}>Click me</button>
        <VideoText title="Four Season Vivaldi" views="230mld" published="10 years ago" user="Fabio Grandi" color="blue" />
        <VideoText title="The best of Vivaldi" views="33mld" published="7 years ago" user="Giuseppe Rossi" color="violet" />
        <VideoText title="Antonio Vivaldi la stravaganza" views="17mld" published="8 years ago" user="Mario Bianchi" color="green" />
        <VideoText title="Antonio Vivaldi: le quattro stagioni" views="4mld" published="13 years ago" user="Antonio Pozzi" color="white" />
        <VideoText title="Vivaldi - Complete Violin Concertos" views="1mld" published="3 years ago" user="Giorgia Meluzzi" color="red" />
    </div>
  );
}

export default App;


