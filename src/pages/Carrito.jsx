import Header from "../components/Header";
import ContenidoCarrito from "../components/ContenidoCarrito";
import Footer from "../components/Footer";

function Carrito() {
    
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="m-2 pt-3 flex-grow-1 text-center">
                <h1>Carrito de compras</h1>
                <ContenidoCarrito />
                <button type="button"
                className="btn btn-dark p-3 d-block mx-auto"
                style={{ width: "200px" }}
                onClick={() => alert("Orden confirmada, ¡Gracias por su compra!")}>
                    Confirmar pedido
                </button>
            </main>
            <Footer className='mt-auto' />
        </div>
    )
};

export default Carrito;