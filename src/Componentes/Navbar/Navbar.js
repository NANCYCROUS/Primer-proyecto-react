import React from "react";
import "./Navbar.css";
import logo from ".//Imagenes/logo-cuadrado.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return(
        <navbar>
            
        <body>
    
        <header>

   <div className="div-banner">
    <img src={logo} className="imagen-banner" alt="Banner Decrous" /> 
    <h2 className="h2-banner">Decrous - Todo en limpieza</h2>    
    </div>

        
    <div clasName="ul-botones">
        <div><NavLink to="./index.html" className="botones-de-la-barra"> Inicio </NavLink></div>
        <div><NavLink to="./CarouselOfertas" className="botones-de-la-barra"> Ofertas </NavLink></div> 
        
        <div><NavLink to="./Productos" className="botones-de-la-barra"> Productos </NavLink></div>                    
        
        
        <div><NavLink to="./Contacto" className="botones-de-la-barra"> Contacto </NavLink></div>
        
       
       
    </div>   
        
        </header>

    <hr/>
         
    </body>
    </navbar>
    
    );}

    export default Navbar;
