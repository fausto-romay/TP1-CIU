import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])



    return (
        <Context.Provider value={{carrito, setCarrito}}>
            {children}
        </Context.Provider>
    );

}

export default ContextProvider