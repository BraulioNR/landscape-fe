import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Prueba from "./pages/prueba"
import Landing from "./pages/Landing"
import Region from "./pages/Region"
import AllRegion from "./pages/AllRegions"
import About from "./pages/About"
import Perfile from "./pages/Perfile"
import AllPhotos from "./pages/AllPhotos"
import Photo from "./pages/Photo"
import MyPhotos from "./pages/MyPhotos"
import CreatePhoto from "./pages/CreatePhoto"
import EditPhoto from "./pages/EditPhoto"

function PrivateRoute({ children }) {
  let token = localStorage.getItem("token")
  return !token ? <Navigate to="/" /> : children
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/regions" element={<AllRegion />} />
        <Route path="/regions/:idRegion" element={<Region />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user/myperfile"
          element={
            <PrivateRoute>
              <Perfile />
            </PrivateRoute>
          }
        />
        <Route path="/photos" element={<AllPhotos />} />
        <Route
          path="/photos/create"
          element={
            <PrivateRoute>
              <CreatePhoto />
            </PrivateRoute>
          }
        />
        <Route
          path="/photos/mylist"
          element={
            <PrivateRoute>
              <MyPhotos />
            </PrivateRoute>
          }
        />
        <Route
          path="/photos/edit/:idPhoto"
          element={
            <PrivateRoute>
              <EditPhoto />
            </PrivateRoute>
          }
        />
        <Route path="/photos/:idPhoto" element={<Photo />} />
      </Routes>
    </Router>
  )
}

export default App
