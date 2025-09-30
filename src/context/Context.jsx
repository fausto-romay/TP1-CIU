import React, { createContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */
export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <Context.Provider value={{carrito, setCarrito, vaciarCarrito}}>
            {children}
        </Context.Provider>
    );

}

export default ContextProvider