import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Carta() {
    /*
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("¡Hace click en el producto si queres sumarlo al carrito!");
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    */
   return (
    <div>
        <Header></Header>
    </div>
   );
}

export default Carta;