import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="bg-secondary text-light py-4 mt-5">
            <div className="container">
                <ul className="nav justify-content-center mb-3">
                    <li className="nav-item">
                        <a className="nav-link px-3 text-light" href="#">SUCURSALES</a>
                    </li>
                </ul>

                <div className="d-flex justify-content-center gap-4 mb-3">
                    <a href="#" className="text-light text-decoration-none">
                        <i className="bi bi-facebook me-1"></i> Facebook
                    </a>
                    <a href="#" className="text-light text-decoration-none">
                        <i className="bi bi-twitter me-1"></i> Twitter
                    </a>
                    <a href="#" className="text-light text-decoration-none">
                        <i className="bi bi-instagram me-1"></i> Instagram
                    </a>
                </div>

                <div className="text-center mb-3">
                    <p className="mb-1">📍 Dirección: Calle Falsa 123, Ciudad, País</p>
                    <p className="mb-1">🕒 Horario: Lun-Vie 8:00 - 20:00, Sáb-Dom 9:00 - 18:00</p>
                    <p className="mb-0">
                        📧 <a href="mailto:info@lunaygranos.com" className="text-light text-decoration-none">info@lunaygranos.com</a> | 
                        📞 <a href="tel:+5491123456789" className="text-light text-decoration-none">+54 9 11 2345 6789</a>
                    </p>
                </div>

                <div className="text-center mt-3">
                    <p className="mb-0">© 2024 Luna & Granos Café - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;