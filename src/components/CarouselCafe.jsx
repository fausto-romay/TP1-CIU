import cafe1 from "../assets/cafe1.jpg";
import cafe2 from "../assets/cafe2.jpg";
import cafe3 from "../assets/cafe3.jpg";

function CarouselCafe() {
return (
    <div id="carouselCafe" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselCafe" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselCafe" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselCafe" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={cafe1} className="d-block w-100" alt="Café 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Aroma Único</h5>
            <p>Disfrutá del mejor café recién molido.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cafe2} className="d-block w-100" alt="Café 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Ambiente Acogedor</h5>
            <p>Un lugar pensado para vos.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cafe3} className="d-block w-100" alt="Café 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sabores Inolvidables</h5>
            <p>Una experiencia en cada taza.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselCafe" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselCafe" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default CarouselCafe;