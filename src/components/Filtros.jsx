import "../styles/Filtros.css";
import { useState, useEffect, useRef } from "react";

function Filtros({ onChange }) {
  const [abierto, setAbierto] = useState(false);
  const [categoria, setCategoria] = useState("Todos");
  const refBoton = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (refBoton.current && !refBoton.current.contains(e.target)) {
        setAbierto(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const seleccionarCategoria = (cat) => {
    setCategoria(cat);
    setAbierto(false);
    if (typeof onChange === "function") {
      onChange((prev) => ({ ...prev, categoria: cat }));
    }
  };

  return (
    <div className="filtros-contenedor">
      <div className="menu-boton" onClick={() => setAbierto((s) => !s)} ref={refBoton}>
        {categoria}
      </div>

      {abierto && (
        <ul className="menu-opciones">
          <li onClick={() => seleccionarCategoria("Todos")}>Todos</li>
          <li onClick={() => seleccionarCategoria("Cafeteria")}>Cafeteria</li>
          <li onClick={() => seleccionarCategoria("Pasteleria")}>Pastelería</li>
        </ul>
      )}
    </div>
  );
}

export default Filtros;