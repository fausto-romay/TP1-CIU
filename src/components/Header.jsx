import "../styles/Header.css";
import logo from "../assets/logo2.png"

function Header() {
    return (
        <header>
            <div className="header-left">
                <img src={logo} alt="logo" className="header-logo" />
                <h1 className="header-titulo">Luna & Granos Café</h1>
            </div>

            <nav className="header-nav">
                <ul>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">CARTA</a></li>
                    <li><a href="">CARRITO</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;