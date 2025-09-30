import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import productosIniciales from "../data"
import { useState, useEffect } from "react";
import Filtros from "../components/Filtros";
import ToastCarrito from "../components/ToastCarrito";
import "../styles/Carta.css"

function Carta() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Hace click en un producto para agregar al carrito 🛒");
        }, 1000);
        return () => clearTimeout(timer); 
    }, []);

    const [productos] = useState(productosIniciales);
    
    const [filtro, setFiltro] = useState({
        categoria: "Todos"
    });

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const mostrarToast = (producto) => {
        setToastMessage(`${producto.nombre} agregado al carrito ✅`);
        setToastVisible(true);
    };

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
        <h1>{filtro.categoria == "Todos" ? "Nuestra Carta" : filtro.categoria == "cafe" ? "Especialidades en Cafe" : "Nuestra Seleccion de Pasteleria"}</h1>
        <Filtros onChange = {setFiltro}/>
        </div>
        <Productos productos={productosFiltrados} onAddCarrito={mostrarToast}/>
        <Footer/>
        <ToastCarrito
            show={toastVisible}
            onClose={() => setToastVisible(false)}
            message={toastMessage}
        />
        </>
    )
}
export default Carta;