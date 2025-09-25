import "../styles/Home.css"
import Header from "../components/Header";
import CarouselCafe from "../components/CarouselCafe";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DescripcionCafe from "../components/DescripcionCafe";

function Home() {
    return (
        <div className="home-contenedor">
            <Header />
            <CarouselCafe />
            <DescripcionCafe />
            <div>
                <img className="home-oferta-img" src="https://cafemartinez.vtexassets.com/assets/vtex.file-manager-graphql/images/ad5e6cdf-b7f9-4f12-a6de-147d10e90707___b8e49f9b9c7d376d2269f4ee7e0b8643.png" alt="oferta" />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;