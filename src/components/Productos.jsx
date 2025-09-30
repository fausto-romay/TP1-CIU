import "../styles/Productos.css"
import { Context } from "../context/Context"
import { useContext } from "react"

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
            {productos.map(producto => {
                return (
                <li key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <strong>{producto.nombre}</strong> ${producto.precio}
                    </div>
                    <div>
                    <button onClick={() => agregarAlCarrito(producto)}>
                        🛒
                    </button>
                    </div>
                </li>
            )})}
        </ul>
    </main>
)

}

export default Productos;