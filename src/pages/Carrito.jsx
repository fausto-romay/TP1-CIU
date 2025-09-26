import Header from "../components/Header";
import ContenidoCarrito from "../components/ContenidoCarrito";
import Footer from "../components/Footer";

function Carrito() {
    return (
        <>
            <Header />
            <main className="mt-5 pt-3 container">
                <ContenidoCarrito />
                <button type="button" className="btn btn-dark btn-sm p-3 m-3" onClick={() => alert("Orden confirmada, ¡Gracias por su compra!")}>Confirmar pedido</button>
            </main>
            <Footer />

        </>
    )
};

export default Carrito;