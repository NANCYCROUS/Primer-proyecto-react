import React, {useState} from "react";
import "./Productos.css";
import Plantilla from "../Plantilla/Plantilla";
import PerfuminaFresco from "./Imagenes/DesodoranteDePisosFresco5Lt.jpeg";
import PerfuminaPino from "./Imagenes/DesodoranteDePisosPino5Lt.jpeg";





const Productos = () => {

    let texto = "Agregaste un Producto al Carrito"

    const [Perfuminas, /*setPerfuminas*/] = useState ([
        {
            id: 1,
            img: PerfuminaFresco,
            name: "Perfumina Fresco",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
            
        },
        {
            id: 2,
            img: PerfuminaPino,
            name: "Perfumina Pino",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
             
        },
        {
            id: 3,
            img: PerfuminaFresco,
            name: "Perfumina Limòn",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
            
        },
        {
            id: 4,
            img: PerfuminaPino,
            name: "Perfumina Cherry",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
             
        },
        {
            id: 5,
            img: PerfuminaFresco,
            name: "Perfumina Jazmin",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
            
        },
        {
            id: 6,
            img: PerfuminaPino,
            name: "Perfumina Chicle",
            presentacion: "Rinde 5 Lt",
            precioMinorista: 200, 
             
        }
    ]);
    
    const [productoAcarrito, setProductoAcarrito] = useState ("") 
    

    return (
<div className="ContenedorDeProductos">

    
        {Perfuminas.map((producto) => {
            return (
        <div className="Productos">    
            <Plantilla 
            key={producto.id} 
            img={producto.img} 
            name={producto.name} 
            presentacion={producto.presentacion} 
            precioMinorista={producto.precioMinorista} />

            <button onClick={() => setProductoAcarrito (texto)}>Agregar a Carrito</button>
            <p>{productoAcarrito}</p>

        </div> )
        })};

    
</div>

           );}

export default Productos




