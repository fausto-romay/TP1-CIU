import "../styles/Home.css"
import Header from "../components/Header";
import CarouselCafe from "../components/CarouselCafe";
import Footer from "../components/Footer";
import DescripcionCafe from "../components/DescripcionCafe";

function Home() {
    return (
        <div className="home-contenedor">
            <Header />
            <CarouselCafe />
            <DescripcionCafe />
            <Footer></Footer>
        </div>
    )
}

export default Home;