import { HashRouter, Routes, Route } from 'react-router-dom';
import GameStartScreen from "./pages/GameStartScreen";
import TeamsScreen from "./pages/TeamsScreen";
import HowToPlay from "./pages/HowToPlay";
import RoundStartScreen from "./pages/RoundStartScreen";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={< GameStartScreen />}/>
        <Route path="/TeamsScreen" element={< TeamsScreen />}/>
        <Route path="/HowToPlay" element={<HowToPlay />}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
