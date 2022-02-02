import React from "react";
import "./Inicio.css";
import Contenedor from "./Componentes/Esquema/Contenedor";
import Derecha from "./Componentes/Esquema/Derecha";
import Izquierda from "./Componentes/Esquema/Izquierda";
import Cabecera from "./Componentes/Esquema/Cabecera";
import Pie from "./Componentes/Esquema/Pie";
import Eventos from "./Componentes/Eventos";
import EventosII from "./Componentes/EventosII";
import Consultar from "./Componentes/Firebase/Consultar";

function Inicio() {
  return (
    <React.Fragment>
      <div className="inicio">
        <Cabecera>Esto es la cabecera</Cabecera>
        <Contenedor>
          <Izquierda>
         
          </Izquierda>
          <Derecha>
            <Consultar />
          </Derecha>
        </Contenedor>
        <Pie>
  
        </Pie>
      </div>
    </React.Fragment>
  );
}

export default Inicio;
