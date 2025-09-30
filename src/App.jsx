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
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" 
                element = {<Home allProducts={allProducts}
                              setAllProducts={setAllProducts}
                              total={total}
                              setTotal={setTotal}
                              countProducts={countProducts}
                              setCountProducts={setCountProducts}
          />}/>
          <Route path="/carta" 
                element = {<Carta allProducts={allProducts}
                                setAllProducts={setAllProducts}
                                total={total}
                                setTotal={setTotal}
                                countProducts={countProducts}
                                setCountProducts={setCountProducts}/>}/>
          <Route path="/Logo" element={<Logo />}/>
          <Route path="/Carrito" 
                element = {<Carrito allProducts={allProducts}
                                  setAllProducts={setAllProducts}
                                  total={total}
                                  setTotal={setTotal}
                                  countProducts={countProducts}
                                  setCountProducts={setCountProducts}
          />}/>
          <Route path="/Contacto" 
                element = {<Contacto allProducts={allProducts}
                                  setAllProducts={setAllProducts}
                                  total={total}
                                  setTotal={setTotal}
                                  countProducts={countProducts}
                                  setCountProducts={setCountProducts}/>}/>
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;