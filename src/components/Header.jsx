import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/luna.png";

function Header() {
    return (
    <header>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand mx-3" to="/">
                    <img src={logo} alt="Logo" style={{ height: "50px" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link mx-3" to="/Carta">INICIO</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-3" to="/Carta">CARTA</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-3" to="/" >CONTACTO</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-3" to="/" >CARRITO</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header