import React, { useContext } from "react";
import "./datos.css";
import { Link } from "react-router-dom";
import { SelectionContext } from "../../context/SelectionContext";

function BodyDatos() {
  const { datos, agregarDatos } = useContext(SelectionContext);
  return (
    <div className="container-body-datos">
      <h1 className="titulo-datos">Ingresa Tus Datos</h1>
    <form>
      <div className="campo-datos">
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={datos.nombre}
          onChange={agregarDatos}
          placeholder="Nombre completo"
        />
      </div>

      <div className="campo-datos">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={datos.email}
          onChange={agregarDatos}
          placeholder="Email"
        />
      </div>

      <div className="campo-datos">
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          value={datos.telefono}
          onChange={agregarDatos}
          placeholder="Telefono"
        />
      </div>

      <div className="campo-datos">
        <input
          type="text"
          id="rut"
          name="rut"
          pattern="[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9Kk]{1}"
          required
          value={datos.rut}
          onChange={agregarDatos}
          placeholder="RUT"
        />
      </div>
    </form>
      <Link to="/Confirmacion">
        <button className="boton-fecha">Agendar Cita</button>
      </Link>
    </div>
  );
}

export default BodyDatos;
