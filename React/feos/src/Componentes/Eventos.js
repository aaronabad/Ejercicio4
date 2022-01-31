import React from "react";
import "../CSS/Eventos.css";

function Eventos(props) {
  const ocultar = () => {
    const objeto = document.getElementById("texto");
    objeto.classList.toggle("oculto");
  };

  return (
    <React.Fragment>
      <button onClick={ocultar}>Ocultar</button>
      <div id="texto">Este texto será ocultado al pulsar el botón.</div>
    </React.Fragment>
  );
}

export default Eventos;
