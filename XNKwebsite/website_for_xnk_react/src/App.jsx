import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/Home.jsx"
import Shows from "./pages/Shows.jsx"
import Bio from "./pages/Bio.jsx"
import Music from "./pages/Music.jsx"
import Video from "./pages/Video.jsx"
import Contact from "./pages/Contact.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
