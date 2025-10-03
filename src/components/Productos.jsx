import "../styles/Productos.css";
import { Context } from "../context/Context";
import { useContext } from "react";

function Productos({ productos, onAddCarrito }) {
    // eslint-disable-next-line no-unused-vars
    const { carrito, setCarrito } = useContext(Context);

    const agregarAlCarrito = (producto) => {
      setCarrito((prev) => [...prev, producto]);
      if (onAddCarrito) onAddCarrito(producto);
    };

    return (
      <main className="productos-contenedor">
        {productos.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          <ul>
            {productos.map((producto) => (
              <li className="producto-item" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                  <strong>{producto.nombre}</strong> ${producto.precio}
                </div>
                <div>
                  <button
                    className="btn-agregar"
                    onClick={() => agregarAlCarrito(producto)}
                    aria-label={`Agregar ${producto.nombre} al carrito`}
                  >
                    🛒
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    );
}

export default Productos;