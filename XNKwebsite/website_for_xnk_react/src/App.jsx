import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/Home.jsx"
import Shows from "./pages/Shows.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows" element={<Shows/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
