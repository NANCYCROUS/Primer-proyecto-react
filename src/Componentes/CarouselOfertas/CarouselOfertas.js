import React from "react";
import "./CarouselOfertas.css";

import Carousel from 'react-bootstrap/Carousel';
/*import Carousel.Item from "react-boostrap/Carousel.Item";*/


import Oferta1 from "./Imagenes/OfertaSemana1.jpeg"
import Oferta2 from "./Imagenes/OfertaSemana2.jpeg"
import Oferta3 from "./Imagenes/OfertaSemana3.jpeg"
/*import Oferta4 from "./Imagenes/OfertaSemana4.jpeg"*/

/*const CarouselOfertas = () => {
    return(
        <div> Soy un CarruselOfertas 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Oferta1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oferta2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oferta3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );}

export default CarouselOfertas;*/


function CarouselFadeExample() {
  return (
    <div ClassName="contenedorCarousel">
    <Carousel fade className="tamanoCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Oferta1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Oferta2} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Oferta3} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
