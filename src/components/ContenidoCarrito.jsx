import { useContext } from "react";
import { Context } from "../context/Context";
import "../styles/ContenidoCarrito.css";

function ContenidoCarrito() {
    const { carrito, setCarrito } = useContext(Context);

    // Agrupa cantidad por producto
    const cantidadPorProducto = carrito.reduce((cant, item) => {
        if (cant[item.id]) {
            cant[item.id].cantidad += 1;
        } else {
            cant[item.id] = { ...item, cantidad: 1 };
        }
        return cant;
    }, {});

    // Convierte en array para mapear
    const productosUnicos = Object.values(cantidadPorProducto);

    // Calcular total
    const total = productosUnicos.reduce((acc, prod) => {
        const precioNumerico = parseFloat(prod.precio.toString().replace(/[^0-9.-]+/g,""));
        return acc + precioNumerico * prod.cantidad;
    }, 0);

    // Función para aumentar cantidad
    const aumentarCantidad = (id) => {
        setCarrito([...carrito, carrito.find(p => p.id === id)]);
    }

    // Función para disminuir cantidad
    const disminuirCantidad = (id) => {
        const index = carrito.findIndex(p => p.id === id);
        if (index !== -1) {
            const nuevoCarrito = [...carrito];
            nuevoCarrito.splice(index, 1); // elimina un solo item
            setCarrito(nuevoCarrito);
        }
    }

    // Función para eliminar producto completo
    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(p => p.id !== id));
    }

    if (carrito.length > 0) {
        return (
            <div className="container my-4">
                <div className="row g-3 justify-content-center">
                    {productosUnicos.map((product) => (
                        <div key={product.id} className="col-12 col-sm-10 col-md-8 col-lg-6">
                            <div className="p-3 border-top border-bottom product-item">
                                <div className="d-flex align-items-center justify-content-between flex-wrap product-content">

                                    <div className="flex-shrink-0 product-image me-3">
                                        <img
                                            src={product.imagen}
                                            alt={product.nombre}
                                            className="rounded"
                                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                        />
                                    </div>

                                    <div className="flex-grow-1 text-center product-name" style={{ minWidth: "40%" }}>
                                        <h5 className="m-0" style={{ fontSize: "1rem" }}>
                                            {product.nombre} x {product.cantidad}
                                        </h5>
                                        <div className="mt-2">
                                            <button className="btn btn-sm btn-outline-dark me-1" onClick={() => disminuirCantidad(product.id)}>-</button>
                                            <button className="btn btn-sm btn-outline-dark me-1" onClick={() => aumentarCantidad(product.id)}>+</button>
                                            <button className="btn btn-sm btn-danger" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 text-end product-price" style={{ minWidth: "20%" }}>
                                        <h6 className="m-0 fw-bold" style={{ fontSize: "0.9rem" }}>
                                            ${product.precio}
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 className="p-2 m-4">
                    TOTAL: ${total.toLocaleString("es-AR")}
                </h4>
            </div>
        );

    } else {
        return (
            <p className="text-center mt-5">
                El carrito está vacío, ¡agregá lo que quieras consumir para abonar!
            </p>
        );
    }
}

export default ContenidoCarrito;

