import "../styles/Header.css";
import logo from "../assets/luna.png";

function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">INICIO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CARTA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACTO</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    );
};

export default Header;