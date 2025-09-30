import { useContext } from "react";
import { Context } from "../context/Context";
import "../styles/ContenidoCarrito.css"

function ContenidoCarrito() {
    const { carrito } = useContext(Context);

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

    if (carrito.length > 0) {
        return (
            <div className="container my-4">
                <div className="row g-3 justify-content-center">
                    {productosUnicos.map((product) => (
                        <div key={product.id} className="col-12 col-sm-10 col-md-8 col-lg-6">
                            <div className="p-3 border-top border-bottom product-item">
                                <div className="d-flex align-items-center justify-content-between flex-wrap product-content">

                                    {/* Imagen */}
                                    <div className="flex-shrink-0 product-image me-3">
                                        <img
                                            src={product.imagen}
                                            alt={product.nombre}
                                            className="rounded"
                                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                        />
                                    </div>

                                    {/* Nombre + cantidad */}
                                    <div className="flex-grow-1 text-center product-name" style={{ minWidth: "40%" }}>
                                        <h5 className="m-0" style={{ fontSize: "1rem" }}>
                                            {product.nombre} x {product.cantidad}
                                        </h5>
                                    </div>

                                    {/* Precio */}
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

