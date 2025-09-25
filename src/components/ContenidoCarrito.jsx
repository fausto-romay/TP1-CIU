import { useContext } from "react";
import { Context } from "../context/Context";

function contenidoCarrito() {

    const {carrito} = useContext(Context)

    return carrito.map((product) => {
        return (
            <div key={product.id}>
                <img src={product.imagen} alt="" />
                <h3>{product.name}</h3>
                <h4>{product.precio}</h4>
            </div>
        )
    })

}

export default contenidoCarrito

