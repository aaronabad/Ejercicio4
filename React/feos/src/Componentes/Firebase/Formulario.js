import React from "react";

const Formulario = (props) => {
  /*
    Operador && -> condición && expresión
        -> si la condición es true, React pintará la expresión,
        -> si la condición es false, React no pintará la expresión.
        -> Valores null, undefined, string vacío y cero (integer) serán evaluados a false.
    */
  return (
    <React.Fragment>
      <div className="formulario">
        <form id="formulario">
          <input
            id="nombre"
            type="text"
            placeholder="Nombre del Feo"
            value={props.nombre && props.nombre}
          />
          <br />
          <input
            id="apellidos"
            type="text"
            placeholder="Apellidos del Feo"
            value={props.apellidos && props.apellidos}
          />
          <br />
          <input
            id="aficiones"
            type="text"
            placeholder="Aficiones en comalista"
            value={props.aficiones && props.aficiones}
          />
          <br />
          <p>Vicios</p>
          <input
            id="primero"
            type="text"
            placeholder="Primer vicio"
            value={props.primero && props.primero}
          />
          <br />
          <input
            id="segundo"
            type="text"
            placeholder="Segundo vicio"
            value={props.segundo && props.segundo}
          />
          <br />
          <input
            id="tercero"
            type="text"
            placeholder="Tercer vicio"
            value={props.tercero && props.tercero}
          />
          <br />
          <button id="boton" onClick={props.funcion}>
            {props.modo == "editar" ? "Editar" : "Crear nuevo"}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Formulario;
