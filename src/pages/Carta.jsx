import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import productosIniciales from "../data"
import { useState } from "react";
import Filtros from "../components/Filtros";
import "../styles/Carta.css"

function Carta() {

    const [productos] = useState(productosIniciales);

    const [filtro, setFiltro] = useState({
        categoria: "Todos"
    });

    const filtrarProductos = (productos) => {
        return (productos.filter(producto => {
            return (
                filtro.categoria === "Todos" || filtro.categoria === producto.categoria
            )
        })
        )
    };

    const productosFiltrados = filtrarProductos(productos);

    return (
        <>
        <Header />
        <div className="carta-contenedor">
            <h1>CARTA</h1>
        </div>
        <Filtros onChange = {setFiltro}/>
        <Productos productos={productosFiltrados}/>
        <Footer/>
        </>
    )
}
export default Carta;