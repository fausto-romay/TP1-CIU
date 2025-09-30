import Header from "../components/Header";
import ContenidoCarrito from "../components/ContenidoCarrito";
import Footer from "../components/Footer";

function Carrito() {
    return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="m-3 p-3 flex-grow-1 text-center d-flex flex-column">
            <h2>Carrito de compras (0)</h2>
            <ContenidoCarrito />
            <button
                type="button"
                className="btn btn-dark p-auto mt-auto mx-auto"
                style={{ width: "10em", height:"3em" }}
                onClick={() =>
                    alert("Orden confirmada, ¡Gracias por su compra!")
                }>
                Confirmar pedido
            </button>
        </main>
        <Footer className="mt-auto" />
    </div>
    )
};

export default Carrito;