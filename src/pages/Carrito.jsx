import Header from "../components/Header";
import ContenidoCarrito from "../components/ContenidoCarrito";
import Footer from "../components/Footer";

import { useContext } from "react";
import { Context } from "../context/Context";

function Carrito() {
    const { carrito, vaciarCarrito } = useContext(Context);

    const confirmarPedido = () => {
        alert("Orden confirmada, ¡Gracias por su compra!");
        vaciarCarrito(); 
    };

    return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="m-3 p-3 flex-grow-1 text-center d-flex flex-column">
            <h2>Carrito de compras ({carrito.length})</h2>
            <ContenidoCarrito />
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