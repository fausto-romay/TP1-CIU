import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import Filtros from "../components/Filtros";
import ToastCarrito from "../components/ToastCarrito";
import productosIniciales from "../data"
import { useState, useEffect } from "react";
import "../styles/Carta.css"

function Carta() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Hace click en un producto para agregar al carrito 🛒");
        }, 1000);
        return () => clearTimeout(timer); 
    }, []);

    const [productos] = useState(productosIniciales);
    const [filtro, setFiltro] = useState({categoria: "Todos"});

    const filtrarProductos = (productos) => {
        return (productos.filter(producto => {
            return (
                filtro.categoria === "Todos" || filtro.categoria === producto.categoria
            )
        })
        )
    };

    const productosFiltrados = filtrarProductos(productos);
    
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const mostrarToast = (producto) => {
        setToastMessage(`${producto.nombre} agregado al carrito ✅`);
        setToastVisible(true);
    };

    return (
        <>
        <Header />
        <div className="carta-contenedor">
            <AnimatePresence mode="wait">
                <motion.h1
                key={filtro.categoria}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.3}}
                >
                {filtro.categoria == "Todos" ? "Nuestra Carta" : filtro.categoria == "Cafeteria" ? "Especialidades en Cafe" : "Nuestra Seleccion de Pasteleria"}
                </motion.h1>
            </AnimatePresence>
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