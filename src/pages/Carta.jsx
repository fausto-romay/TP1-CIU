import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import productosIniciales from "../mocks/productos.json"
import { useState } from "react";
import Filtros from "../components/Filtros";

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
        <div className="container">
            <h1 className="text-center my-5">Carta</h1>
        </div>
        <Filtros onChange = {setFiltro}/>
        <Productos productos={productosFiltrados}/>
        <Footer/>
        </>
    )
}
export default Carta;