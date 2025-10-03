import "../styles/Productos.css";
import { Context } from "../context/Context";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

function Productos({ productos, onAddCarrito }) {
  const { carrito, setCarrito } = useContext(Context);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    if (onAddCarrito) {
      onAddCarrito(producto);
    }
  };

  return (
    <main className="productos-contenedor">
      {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          <AnimatePresence>
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
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    🛒
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </main>
  );
}

export default Productos;