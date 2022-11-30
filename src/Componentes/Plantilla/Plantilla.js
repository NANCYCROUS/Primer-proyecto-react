import React from 'react'

const Plantilla = (props) => {
  return (
    <div>
        <img src={props.img} alt="imagenProducto" className="imagenProducto"/>
        <h1>{props.name}</h1>
        <p>{props.presentacion}</p>
        <p>${props.precioMinorista}</p>
        
    </div>
  )
}

export default Plantilla