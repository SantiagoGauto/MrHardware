import fondo1 from '../ImagesFolder/fondo1.jpeg'
import fondo2 from '../ImagesFolder/fondo2.jpeg'
import fondo3 from '../ImagesFolder/fondo3.jpg'
import '../css/carousel.css'

export default function CarouselBackground() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src= {fondo1} className="d-block w-100" alt="fondo1"/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Bienvenido a MrHardware</h5>
            <p>Sitio de las mejores computadoras para el mundo gaming</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src= {fondo2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Pc Armadas</h5>
            <p>El mejor armado y componentes</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src= {fondo3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Intel / AMD</h5>
            <p>Intel y AMD tienen excelentes procesadores para juegos y tareas de productividad como edición y transcodificación de video.</p>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
        </>
    );
}