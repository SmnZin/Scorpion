import React, { createContext, useState, useEffect } from "react";
import { parseISO } from 'date-fns';

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {

//Servicios.jsx
  // Obtener la selección de servicios del almacenamiento local
  const storedSelection = () => {
    const serviciosSeleccionados = localStorage.getItem("serviciosSeleccionados");
    if (serviciosSeleccionados) {
      return JSON.parse(serviciosSeleccionados);
    } else {
      return [];
    }
  };

  const [serviciosSeleccionados, setServiciosSeleccionados] = useState(storedSelection());

  const agregarServicio = (servicio) => {
    console.log("Agregando servicio de", servicio);
    setServiciosSeleccionados((prevServicios) => [...prevServicios, servicio]);
  };

  const eliminarServicio = (servicio) => {
    console.log("Eliminando servicio de", servicio);
    setServiciosSeleccionados((prevServicios) =>
      prevServicios.filter((s) => s !== servicio)
    );
  };

  const limpiarServicios = () => {
    setServiciosSeleccionados([]);
  };
  // Guardar la selección de servicios en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem(
      "serviciosSeleccionados",
      JSON.stringify(serviciosSeleccionados)
    );
  }, [serviciosSeleccionados]);
//fin Servicios.jsx

//Calendario.jsx

  // Obtener la selección de fecha del almacenamiento local
  const storedDate = () => {
    const fechaSeleccionada = localStorage.getItem("fechaSeleccionada");
    if (fechaSeleccionada) {
      return JSON.parse(fechaSeleccionada);
    } else {
      return null;
    }
  };


  const [fechaSeleccionada, setFechaSeleccionada] = useState(storedDate() );
  const agregarFecha = (fecha) => {
    const fechaObjeto = {
      dia: fecha.getDate(),
      mes: fecha.getMonth() + 1,
      año: fecha.getFullYear(),
    }
    console.log("Agregando fecha", fechaObjeto);
    setFechaSeleccionada(fechaObjeto);
  }

  const eliminarFecha = () => {
    console.log("Eliminando fecha");
    setFechaSeleccionada(null);
  }

  // Guardar la selección de fecha en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem(
      "fechaSeleccionada",
      JSON.stringify(fechaSeleccionada)
    );
  }, [fechaSeleccionada]);


  
  
//fin Calendario.jsx

  return (
    <SelectionContext.Provider
      value={{
        serviciosSeleccionados,
        agregarServicio,
        eliminarServicio,
        limpiarServicios,
        fechaSeleccionada,
        agregarFecha,
        eliminarFecha,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
