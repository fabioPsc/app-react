/* import logo from './logo.svg'; */
import './App.css';
import VideoText from './VideoText';



function App() {
  // PROPS - propietà, dati che passiamo
  return (
    <div className="App">
        <VideoText title="Four Season Vivaldi" views="230mld" published="10 years ago" user="Fabio Grandi" />
        <VideoText title="The best of Vivaldi" views="33mld" published="7 years ago" user="Giuseppe Rossi" />
        <VideoText title="Antonio Vivaldi la stravaganza" views="17mld" published="8 years ago" user="Mario Bianchi" />
        <VideoText title="Antonio Vivaldi: le quattro stagioni" views="4mld" published="13 years ago" user="Antonio Pozzi" />
        <VideoText title="Vivaldi - Complete Violin Concertos" views="1mld" published="3 years ago" user="Giorgia Meluzzi" />
    </div>
  );
}

export default App;


