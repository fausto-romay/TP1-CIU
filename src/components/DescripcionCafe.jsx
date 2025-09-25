import { Link } from "react-router-dom";

function DescripcionCafe() {
    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                    <h2 className="card-title mb-4 text-center fw-bold text-dark">
                        Luna & Granos Café
                    </h2>
                    <p className="card-text fs-5 text-muted text-center">
                        Luna & Granos Café es un espacio creado para quienes disfrutan de un buen café acompañado de calidad y calidez en cada detalle. Ofrecemos una amplia variedad de granos seleccionados, desde los más suaves hasta los más intensos, preparados por baristas especializados que garantizan una experiencia única en cada taza. Además, contamos con una propuesta gastronómica que incluye pastelería artesanal, opciones saludables y menús diseñados para acompañar cualquier momento del día. 
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                        <Link to="/carta" className="btn btn-dark btn-lg rounded-pill px-4">
                            NOSOTROS
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescripcionCafe;