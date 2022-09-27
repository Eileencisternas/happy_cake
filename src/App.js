import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import NavbarHappy from "./components/NabvarHappy"

function App() {
  return (
  
      <BrowserRouter>
        <NavbarHappy />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
   
  )
}
export default App
