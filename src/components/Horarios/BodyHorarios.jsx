import React, { useState } from "react";
import "./horarios.css";

function CasillaHor({ horario, seleccionado, habilitado, onClick }) {
  return (
    <div
      className={`casillaHor ${seleccionado ? "seleccionadoHor" : ""} ${
        habilitado ? "" : "deshabilitado"
      }`}
      onClick={onClick}
    >
      <span className="casilla-texto">{horario}</span>
    </div>
  );
}

function BodyHorarios() {
  const [horariosSeleccionados, setHorariosSeleccionados] = useState([]); // este estado tengo que moverlo al contexto
  const [casillaSeleccionada, setCasillaSeleccionada] = useState(null);

  const handleCasillaClick = (horario) => {
    if (casillaSeleccionada === horario) {
      setCasillaSeleccionada(null);
      setHorariosSeleccionados([]); // este estado tengo que moverlo al contexto
    } else {
      setCasillaSeleccionada(horario);
      setHorariosSeleccionados([horario]); // este estado tengo que moverlo al contexto
    }
    console.log(`Horario seleccionado: ${horario}`);
  };
  const confirmarHabilitado = horariosSeleccionados.length > 0;

  return (
    <div className="body-horarios">
      <h1 className="titulo-horarios">Seleccione un Horario</h1>
      <div className="contenedor-horarios">
        <div className="columna">
          <CasillaHor
            horario="9:00"
            seleccionado={horariosSeleccionados.includes("9:00")}
            onClick={() => handleCasillaClick("9:00")}
          />
          <CasillaHor
            horario="10:00"
            seleccionado={horariosSeleccionados.includes("10:00")}
            onClick={() => handleCasillaClick("10:00")}
          />
          <CasillaHor
            horario="11:00"
            seleccionado={horariosSeleccionados.includes("11:00")}
            onClick={() => handleCasillaClick("11:00")}
          />
          <CasillaHor
            horario="12:00"
            seleccionado={horariosSeleccionados.includes("12:00")}
            onClick={() => handleCasillaClick("12:00")}
          />
          <CasillaHor
            horario="13:00"
            seleccionado={horariosSeleccionados.includes("13:00")}
            onClick={() => handleCasillaClick("13:00")}
          />
          <CasillaHor
            horario="14:00"
            seleccionado={horariosSeleccionados.includes("14:00")}
            onClick={() => handleCasillaClick("14:00")}
          />
        </div>
        <div className="columna">
          <CasillaHor
            horario="15:00"
            seleccionado={horariosSeleccionados.includes("15:00")}
            onClick={() => handleCasillaClick("15:00")}
          />
          <CasillaHor
            horario="16:00"
            seleccionado={horariosSeleccionados.includes("16:00")}
            onClick={() => handleCasillaClick("16:00")}
          />
          <CasillaHor
            horario="17:00"
            seleccionado={horariosSeleccionados.includes("17:00")}
            onClick={() => handleCasillaClick("17:00")}
          />
          <CasillaHor
            horario="18:00"
            seleccionado={horariosSeleccionados.includes("18:00")}
            onClick={() => handleCasillaClick("18:00")}
          />
          <CasillaHor
            horario="19:00"
            seleccionado={horariosSeleccionados.includes("19:00")}
            onClick={() => handleCasillaClick("19:00")}
          />
          <CasillaHor
            horario="20:00"
            seleccionado={horariosSeleccionados.includes("20:00")}
            onClick={() => handleCasillaClick("20:00")}
          />
        </div>
      </div>
      <a href="">
        <button className="boton-horario" disabled={!confirmarHabilitado}>
          Confirmar
        </button>
      </a>
    </div>
  );
}

export default BodyHorarios;
