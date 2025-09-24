import "../styles/Productos.css"

function Productos({productos}) {

return (
    <main className="productos-contenedor">
        <ul>
            {productos.map(producto => {
                return (
                <li key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <strong>{producto.nombre}</strong> - ${producto.precio}
                    </div>
                    <div>
                    <button>
                        🛒
                    </button>
                    </div>
                </li>
            )})}
        </ul>
    </main>
)

}

export default Productos