import Header from "../components/Header";
import ContenidoCarrito from "../components/ContenidoCarrito";
import Footer from "../components/Footer";

import { useContext, useState } from "react";
import { Context } from "../context/Context";

function Carrito() {
    const { carrito, vaciarCarrito } = useContext(Context);

    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");

    const confirmarPedido = () => {
        if (carrito.length > 0) {
            if (!nombre.trim() || !dni.trim() || !telefono.trim()) {
                alert("Por favor complete todos los campos antes de confirmar su pedido.");
                return;
            }

            alert(`Orden confirmada. ¡Gracias por su compra ${nombre}!`);
            vaciarCarrito();
            setNombre("");
            setDni("");
            setTelefono("");
        } else {
            alert("Su carrito está vacío, agregue productos para confirmar su compra.");
        }
    };

    return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="m-3 p-3 flex-grow-1 text-center d-flex flex-column">
            <h2>Carrito de compras ({carrito.length})</h2>
            <ContenidoCarrito />

            <form className="mt-4 mb-3 mx-auto" style={{ maxWidth: "400px", textAlign: "left" }}>
                    <div className="mb-3">
                        <label className="form-label">NOMBRE</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">DNI</label>
                        <input
                            type="text"
                            className="form-control"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            placeholder="Ingrese su DNI"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">TELÉFONO</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder="Ingrese su número de teléfono"
                        />
                    </div>
            </form>

            <div className="alert alert-secondary mx-auto" style={{ maxWidth: "500px" }}>
                    Los productos serán <strong>entregados y abonados únicamente en nuestro local</strong>.  
                    El tiempo estimado de entrega es de <strong>10 días</strong>.
            </div>

            <button
                type="button"
                className="btn btn-dark p-auto mt-auto mx-auto"
                style={{ width: "10em", height:"3em" }}
                onClick={confirmarPedido}
                >
                Confirmar pedido
            </button>
        </main>
        <Footer className="mt-auto" />
    </div>
    )
};

export default Carrito;

