import "../styles/Filtros.css"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function Filtros({onChange}) {

    const cambioCategoria = (event) => {
        onChange(prevState => ({
            ...prevState,
            categoria: event.target.value
        }))
    }

    const [abierto, setAbierto] = useState(false);
    const [categoria, setCategoria] = useState("Todos");

    const seleccionarCategoria = (categoria) => {
        setCategoria(categoria);
        setAbierto(false);
        cambioCategoria({ target: { value: categoria } });
    }

  return (
    <div className="filtros-contenedor">

      <motion.div
        className="menu-boton"
        whileTap={{ scale: 0.95 }}
        onClick={() => setAbierto(!abierto)}
      >
        {categoria}
      </motion.div>

      <AnimatePresence>
        {abierto && (
          <motion.ul
            className="menu-opciones"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <li onClick={() => seleccionarCategoria("Todos")}>Todos</li>
            <li onClick={() => seleccionarCategoria("Cafeteria")}>Cafeteria</li>
            <li onClick={() => seleccionarCategoria("Pasteleria")}>Pastelería</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Filtros;