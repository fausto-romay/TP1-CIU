import { useContext } from "react";
import { Context } from "../context/Context";

function ContenidoCarrito() {
    const {carrito} = useContext(Context)

    return (
        <>
            <h1 className="text-center md-3 pb-5">Carrito de compras</h1>
            <div className="container my-4">
                <div className="row g-3">
                    {carrito.map((product) => (
                        <div key={product.id} className="col-12">
                            <div className="card shadow-sm p-3">
                                <div className="d-flex align-items-center justify-content-between">

                                    <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="me-3 rounded"
                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                    />
                                    
                                    <h5 className="flex-fill text-center m-0">{product.nombre}</h5>
                                    <h6 className="text-end m-0 fw-bold">{product.precio}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


export default ContenidoCarrito;

