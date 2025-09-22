import { useEffect } from "react";

function Carta() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("¡Hace click en el producto si queres sumarlo al carrito!");
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1>Página 2</h1>
    )
}

export default Carta;