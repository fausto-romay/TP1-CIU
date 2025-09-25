import React, { useState } from "react";
import "../styles/Formulario.css";

function Formulario() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        fecha: "",
        hora: "",
        mensaje: ""
    })

    const [enviado, setEnviado] = useState(null);
    const fechaActual = new Date().toISOString().slice(0, 10);
    
    function validate(values) {
        const valor = {};

        if (!values.nombre.trim()) valor.nombre = "El nombre es obligatorio.";
        if (!values.hora) valor.hora = "La hora de la reserva es obligatoria.";
        if (!values.mensaje.trim()) valor.mensaje = "Por favor indicar detalle de la reserva.";

        if (!values.email.trim()) {
            valor.email = "El email es obligatorio.";
        } else {
            const respuesta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!respuesta.test(values.email)) {
                valor.email = "Introduce un email válido.";
            };
        };

        if (!values.fecha) {
            valor.fecha = "La fecha de la reserva es obligatoria.";
        } else if (values.fecha < fechaActual) {
            valor.fecha = "La fecha no puede estar en el pasado.";
        }

        return valor;
    }

    /* 
        handleChange se ejecuta cada vez que el usuario escribe o cambia algo en un input.
        si escribis tu nombre el estado pasa a ser:

        { nombre: "Juan", email: "", fecha: "", hora: "", mensaje: "" }
        no se si esta bien....
    */

    function handleChange(valor) {
        const { name, value } = valor.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    /*
        Cuando el usuario hace click en enviar evita que se recargue la página.
        y revisa los errores.
    */

    function handleSubmit(valor) {
        valor.preventDefault();
        const v = validate(form);
            
        if (Object.keys(v).length > 0) {
            setEnviado({ ok: false, text: "Corrige los errores antes de enviar." })
            return;
        }

        setEnviado({ ok: true, text: "Reserva enviada con éxito. Muchas gracias!" })
        setForm({ nombre:"", email:"", fecha:"", hora:"", mensaje:"" });
    }

    return (
        <div className="formulario-container">
            <h1>FORMULARIO DE RESERVA</h1>

            {enviado && (
                <p style={{ color: enviado.ok ? "green" : "red" }}>{enviado.text}</p>
            )}

            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                </div>
                <div className="campo">
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="campo">
                    <label>Fecha de la reserva:</label>
                    <input type="date" name="fecha" value={form.fecha} onChange={handleChange} min={fechaActual} />
                </div>
                <div className="campo">
                    <label>Hora de la reserva:</label>
                    <input type="time" name="hora" value={form.hora} onChange={handleChange} />
                </div>
                <div className="campo">
                    <label>Mensaje / Detalle de la reserva:</label>
                    <textarea name="mensaje" value={form.mensaje} onChange={handleChange}></textarea>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;
