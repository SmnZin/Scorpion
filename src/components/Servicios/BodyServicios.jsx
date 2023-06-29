import React, { useState, useContext, useEffect } from "react";
import "../styles/servicios.css";
import corte from "../../assets/Corte.png";
import barberia from "../../assets/barberia.png";
import coloracion from "../../assets/coloracion.png";
import lifting from "../../assets/lifting.png";
import parafinoterapia from "../../assets/parafinoterapia.png";
import depilacion from "../../assets/depilacion.png";
import { SelectionContext } from "../../context/SelectionContext";
import { Link } from "react-router-dom";
function Casilla({ imagen, textoArriba, textoAbajo, seleccionada, onClick }) {
  return (
    <div
      className={`casilla ${seleccionada ? "seleccionada" : ""}`}
      style={{ backgroundImage: `url(${imagen})` }}
      onClick={onClick}
    >
      <span className="texto">{textoArriba}</span>
      <span className="texto">{textoAbajo}</span>
    </div>
  );
}

function Servicios() {
  const { serviciosSeleccionados, agregarServicio, eliminarServicio, limpiarServicios } =
    useContext(SelectionContext);

  const [mostrarError, setMostrarError] = useState(false);


  const handleCasillaClick = (index) => {
    const servicio = obtenerNombreServicio(index);
    if (serviciosSeleccionados.includes(servicio)) {
      eliminarServicio(servicio);
    } else {
      agregarServicio(servicio);
    }
  };

  const obtenerNombreServicio = (index) => {
    switch (index) {
      case 0:
        return "Corte de pelo";
      case 1:
        return "Barberia";
      case 2:
        return "Coloracion";
      case 3:
        return "Lifting de pestañas";
      case 4:
        return "Parafinoterapia";
      case 5:
        return "Depilacion";
      default:
        return "";
    }
  };
  const confirmarHabilitado = serviciosSeleccionados.length > 0;
  const handleAgendarClick = () => {
    if (!confirmarHabilitado) {
      setMostrarError(true);
    } else {
      // Lógica para manejar el evento de Agendar Hora
    }
  };

  return (
    <div className="body-servicios">
      <h1 className="titulo-servicios">Selecciona uno o mas servicios</h1>
      <div className="contenedor-casillas">
        <div className="columna">
          
          <Casilla
            imagen={corte}
            textoArriba="Corte de pelo"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes("Corte de pelo")}
            onClick={() => handleCasillaClick(0)}
          />
          <Casilla
            imagen={barberia}
            textoArriba="Barberia"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes("Barberia")}
            onClick={() => handleCasillaClick(1)}
          />
          <Casilla
            imagen={coloracion}
            textoArriba="Coloracion"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes("Coloracion")}
            onClick={() => handleCasillaClick(2)}
          />
        </div>
        <div className="columna">
          <Casilla
            imagen={lifting}
            textoArriba="Lifting de pestañas"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes(
              "Lifting de pestañas"
            )}
            onClick={() => handleCasillaClick(3)}
          />

          <Casilla
            imagen={parafinoterapia}
            textoArriba="Parafinoterapia"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes("Parafinoterapia")}
            onClick={() => handleCasillaClick(4)}
          />
          <Casilla
            imagen={depilacion}
            textoArriba="Depilacion"
            textoAbajo="Reserva Aqui"
            seleccionada={serviciosSeleccionados.includes("Depilacion")}
            onClick={() => handleCasillaClick(5)}
          />
        </div>
      </div>
      <p className={`servicios-deselect ${mostrarError ? "error" : ""}`}>
        Servicios seleccionados:{" "}
        <span className="servicios-select">
          {serviciosSeleccionados.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
        </span>
      </p>
      <Link to="/Fecha">
        <button
          className="boton"
          disabled={!confirmarHabilitado}
          onClick={handleAgendarClick}
        >
          Agendar Hora
        </button>
      </Link>
    </div>
  );
}

export default Servicios;
