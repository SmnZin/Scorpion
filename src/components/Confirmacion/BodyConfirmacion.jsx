import React, { useContext } from "react";
import "./confirmacion.css";
import { SelectionContext } from "../../context/SelectionContext";
import { Link } from "react-router-dom";

function BodyConfirmacion() {
  const {
    datos,
    serviciosSeleccionados,
    fechaSeleccionada,
    horariosSeleccionados,
  } = useContext(SelectionContext);
  return (
    <div className="container-body-confirmacion">
      <h1 className="titulo-confirmacion">Confirmacion de Datos</h1>
      <div className="datos-confirmacion">
        <h3 className="casilla-confirmacion">Nombre: {datos.nombre}</h3>
        <h3 className="casilla-confirmacion">
          Servicio: {serviciosSeleccionados.join(", ")} 
        </h3>
        <h3 className="casilla-confirmacion">
          Fecha: {fechaSeleccionada.dia}/{fechaSeleccionada.mes}/
          {fechaSeleccionada.año} - {horariosSeleccionados} hrs
        </h3>
        <h3 className="casilla-confirmacion">
          Direccion: Ecuador #1210, La cisterna
        </h3>
        <h3 className="casilla-confirmacion">ID Reserva: {}</h3>
      </div>
      <Link to="/Final">
        <button className="boton-fecha">Confirmar</button>
      </Link>
    </div>
  );
}

export default BodyConfirmacion;
