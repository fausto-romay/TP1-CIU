import "../styles/Productos.css"
import { Context } from "../context/Context"
import { useContext } from "react"
import {AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Productos({productos, onAddCarrito}) {
    const {carrito, setCarrito} = useContext(Context)

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto])
        if (onAddCarrito) {
            onAddCarrito(producto);
        }
    }

return (
    <main className="productos-contenedor">
    <ul>
      <AnimatePresence mode="wait">
            {productos.map((producto) => (
          <motion.li
            className="producto-item"
            key={producto.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
              <strong>{producto.nombre}</strong> ${producto.precio}
            </div>
            <div>
              <button onClick={() => agregarAlCarrito(producto)}>🛒</button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
    </main>
)

}

export default Productos;