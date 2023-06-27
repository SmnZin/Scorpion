import React from "react";
import mancha from "../../assets/mancha.png";
import cartoon from "../../assets/cartoon.png";
import "../styles/body.css";

function Body() {
  return (
    <div className="custom-body">
      <div className="image-contenedor">
        <img className="mancha" src={mancha} alt="Imagen principal" />
        <img className="cartoon" src={cartoon} alt="Imagen principal" />
      </div>
      <h1 className="subtitulo">Un Nuevo concepto de Peluqueria</h1>
      <a href="/Servicios">
        <button className="boton" >Agendar Hora</button>
      </a>
    </div>
  );
}

export default Body;
