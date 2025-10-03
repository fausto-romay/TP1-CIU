import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import Logo from "./assets/luna.png";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import ContextProvider, { Context } from "./context/Context";
import "./styles/App.css";
import { useState } from 'react';

function App() {
  
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/carta" element = {<Carta />}/>
          <Route path="/Logo" element={<Logo />}/>
          <Route path="/Carrito" element = {<Carrito />}/>
          <Route path="/Contacto" element = {<Contacto />}/>
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;