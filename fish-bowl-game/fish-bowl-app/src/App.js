import { HashRouter, Routes, Route } from 'react-router-dom';
import GameStartScreen from "./pages/GameStartScreen";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GameStartScreen />}/>
        
      </Routes>
    </HashRouter>

  );
}

export default App;
