import React from "react";
import MainPage from "./components/Mainpage/MainPage";
import ServiciosPage from "./components/Servicios/Servicios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SeleccionarFecha from "./components/Calendario/SeleccionarFecha";
import SeleccionarHorario from "./components/Horarios/SeleccionarHorario";
import { SelectionProvider } from "./context/SelectionContext";

function App() {
  return (
    <div>
      <SelectionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Servicios" element={<ServiciosPage />} />
            <Route path="/Fecha" element={<SeleccionarFecha />} />
            <Route path="/Horarios" element={<SeleccionarHorario />} />
          </Routes>
        </Router>
      </SelectionProvider>
    </div>
  );
}

export default App;
