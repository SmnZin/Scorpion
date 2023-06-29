import React, { useState, useContext } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import { isSameDay, isBefore, startOfToday } from "date-fns";
import "react-day-picker/dist/style.css";
import { SelectionContext } from "../../context/SelectionContext";
import { Link } from "react-router-dom";

import "./calendario.css";

function Calendario() {
  const { agregarFecha, fechaSeleccionada, eliminarFecha } =
    useContext(SelectionContext);
  const [selectedDay, setSelectedDay] = useState(fechaSeleccionada);

  const handleDateChange = (date) => {
    setSelectedDay(date);
    agregarFecha(date);
  };

  const disabledDays = {
    before: startOfToday(),
  };

  const confirmarHabilitado = fechaSeleccionada !== null;
  const handleSeleccionarHoraClick = () => {
    if (!confirmarHabilitado) {
    } else {
      // Lógica para manejar el evento de Seleccionar Hora
    }
  };

  const isDaySelected = (day) => {
    return (
      (selectedDay && isSameDay(day, selectedDay)) ||
      (fechaSeleccionada && isSameDay(day, fechaSeleccionada))
    );
  };

  return (
    <div className="container-body-fecha">
      <h1 className="select-date">Seleccione una Fecha</h1>
      <div className="calendario-container">
        <div className="custom-calendar">
          <DayPicker
            required
            locale={es}
            selected={fechaSeleccionada}
            onDayClick={handleDateChange}
            modifiers={{
              disabled: (date) => isBefore(date, startOfToday()),
              selected: isDaySelected,
            }}
            disabledDays={disabledDays}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today-style",
            }}
            modifiersStyles={{
              disabled: { fontSize: "75%" },
            }}
          />
        </div>
        <div className="selected-day">
          {fechaSeleccionada && (
            <>
              Día seleccionado: {fechaSeleccionada.dia}/{fechaSeleccionada.mes}/
              {fechaSeleccionada.año}
            </>
          )}
        </div>
      </div>

      <Link to="/Horarios">
        <button
          className="boton-fecha"
          disabled={!confirmarHabilitado}
          onClick={handleSeleccionarHoraClick}
        >
          Seleccionar Hora
        </button>
      </Link>
    </div>
  );
}

export default Calendario;
