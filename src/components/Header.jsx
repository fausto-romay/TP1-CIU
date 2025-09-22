import "../styles/Header.css";
import logo from "../assets/logo2.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="header-logo" />
            <h1 className="header-titulo">Luna & Granos Café</h1>
        </header>
    )
}

export default Header;