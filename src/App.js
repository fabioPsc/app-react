/* import logo from './logo.svg'; */
import './App.css';
import VideoText from './VideoText';



function App() {
  // PROPS - propietà, dati che passiamo
  return (
    <div className="App">
        <VideoText title="Four Season Vivaldi" views="230mld" published="10 years ago" user="Fabio Grandi" color="blue" />
        <VideoText title="The best of Vivaldi" views="33mld" published="7 years ago" user="Giuseppe Rossi" color="green" />
        <VideoText title="Antonio Vivaldi la stravaganza" views="17mld" published="8 years ago" user="Mario Bianchi" color="white" />
        <VideoText title="Antonio Vivaldi: le quattro stagioni" views="4mld" published="13 years ago" user="Antonio Pozzi" color="violet" />
        <VideoText title="Vivaldi - Complete Violin Concertos" views="1mld" published="3 years ago" user="Giorgia Meluzzi" color="red" />
    </div>
  );
}

export default App;


