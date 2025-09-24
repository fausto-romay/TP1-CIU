

function Footer(){
    return(
        <footer>
            <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
            <div>
                <p>© 2024 Café Luna - Todos los derechos reservados</p>
            </div>
            <div>
                <a href="#"><img src="@" alt="Logo" />Facebook</a>
                <a href="#"><img src="@" alt="Logo" />Twitter</a>
                <a href="#"><img src="#" alt="Logo" />Instagram</a>
            </div>
            <data value="">
                <p>Contacto:
                    <a href="mailto:"></a>
                    <a href="tel:"></a>
                </p>
            </data>
            <div>
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Horario: Lun-Vie 8:00 - 20:00, Sáb-Dom 9:00 - 18:00</p>
            </div>
        </footer>
    )
}

export default Footer;