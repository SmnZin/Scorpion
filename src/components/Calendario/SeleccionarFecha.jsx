import React from "react";
import HeaderGeneral from "../HeaderGeneral";
import Footer from "../Footer";
import Calendario from "./BodyCalendario";
import "./containerCalendario.css";

function SeleccionarFecha() {
  return (
    <div className="container">
      <HeaderGeneral />
      <Calendario />
      <Footer />
    </div>
  );
}
export default SeleccionarFecha;
