import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Prueba from "./pages/prueba"
import Landing from "./pages/Landing"
import Region from "./pages/Region"
import AllRegion from "./pages/AllRegions"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
