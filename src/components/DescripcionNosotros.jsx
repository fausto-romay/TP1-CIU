import React from "react";
import "../styles/DescripcionNosotros.css"; 
import imagenLocal from "../assets/cafeteria.jpg";

function DescripcionNosotros() {
    return (
        <section className="descripcion-nosotros py-5">
        <div className="container">
            <div className="row align-items-center gx-5">
            <div className="col-lg-5 mb-4 mb-lg-0">
                <img
                    src={imagenLocal}
                    alt="Nuestro local Luna & Granos"
                    className="img-fluid rounded shadow-sm"
                />
            </div>
            <div className="col-lg-7">
                <h2 className="mb-3">Sobre Luna & Granos Café</h2>
                <p className="lead">
                    Nos apasiona crear experiencias únicas
                    para quienes aman el café. Desde nuestros inicios en el año 1912, hemos buscado
                    fusionar sabores, calidad y un espacio cálido para compartir
                    con amigos o disfrutar un momento individual en el centro de la capital de Buenos Aires.
                </p>
                <p>
                    Nos encontramos en <strong>Suipacha 384, CABA, Buenos Aires</strong>.
                    Nuestro horario de atención es de <strong>08:00 a 22:00</strong> todos los días.
                    Puedes contactarnos al <strong>+54 9 11 1234-5678</strong> o vía correo a
                    <strong> info@lunaygranos.com.ar</strong>.
                </p>
                <div className="mt-4 ratio ratio-16x9 shadow-sm">
                    <iframe
                        src="https://www.bing.com/maps/embed?h=450&w=600&cp=-34.603912~-58.383644&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                        title="Mapa de ubicación"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default DescripcionNosotros;