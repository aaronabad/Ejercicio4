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
import Formulario from "./Componentes/Firebase/Formulario";

function Inicio() {
  /*
    Es posible pasar funciones como parámetros utilizando funciones flecha. 
    Para ello es necesario declararlas antes.
  */
  const hola = (saludado) => {
    alert(`Hola ${saludado}`);
  };
  return (
    <React.Fragment>
      <div className="inicio">
        <Cabecera>Esto es la cabecera</Cabecera>
        <Contenedor>
          <Izquierda>
            <Eventos />
            <Formulario
              modo="nuevo"
              funcion={() => {
                hola("Feo");
              }}
            />
          </Izquierda>
          <Derecha>
            <Consultar />
          </Derecha>
        </Contenedor>
        <Pie>
          <EventosII />
        </Pie>
      </div>
    </React.Fragment>
  );
}

export default Inicio;
