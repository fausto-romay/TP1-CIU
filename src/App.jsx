import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import Logo from "./assets/luna.png";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import ContextProvider, { Context } from "./context/Context";
import "./styles/App.css";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carta" element={<Carta />}></Route>
          <Route path="/Logo" element={<Logo />}></Route>
          <Route path="/Carrito" element={<Carrito />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;