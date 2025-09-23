import "../styles/Home.css"
import Header from "../components/Header";
import CarouselCafe from "../components/CarouselCafe";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-contenedor">
            <Header />
            <CarouselCafe />
            <section className="home-descripcion">
                <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio dolorum distinctio, cumque laboriosam labore molestias vero quibusdam delectus totam fugiat sapiente quas autem pariatur laborum veritatis exercitationem facilis voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque quisquam vero consequatur laudantium, cupiditate id dolores praesentium voluptatum impedit, similique eveniet nihil, esse aperiam pariatur accusamus aliquam quibusdam rerum!</p>
                <Link to="/carta" className="home-boton"><button>Ver Carta</button></Link>
            </section>
        </div>
    )
}

export default Home;