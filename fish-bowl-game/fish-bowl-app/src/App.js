import { HashRouter, Routes, Route } from 'react-router-dom';
import GameStartScreen from "./pages/GameStartScreen";
import TeamsScreen from "./pages/TeamsScreen";
import HowToPlay from "./pages/HowToPlay";
import RoundStartScreen from "./pages/RoundStartScreen";
import PlayerTurn from "./pages/PlayerTurn";
import EndOfTurn from "./pages/EndOfTurn";
import EndOfRound from "./pages/EndOfRound";
import FinalScore from "./pages/FinalScore";
import "./fishbowlstyles.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={< GameStartScreen/>}/>
        <Route path="/TeamsScreen" element={< TeamsScreen/>}/>
        <Route path="/HowToPlay" element={<HowToPlay/>}/>
        <Route path="/RoundStartScreen" element={<RoundStartScreen/>}/>
        <Route path="/PlayerTurn" element={<PlayerTurn/>}/>
        <Route path="/EndOfTurn" element={<EndOfTurn/>}/>
        <Route path="/EndOfRound" element={<EndOfRound/>}/>
        <Route path="/FinalScore" element={<FinalScore/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
