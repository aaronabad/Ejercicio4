import React, { PureComponent } from "react";
import Eliminar from "./Eliminar";

const Feo = (props) => {
  return (
    <React.Fragment>
      <div key={props.id} id={props.id} className="feoData">
        <h3>
          {props.nombre} {props.apellidos}
        </h3>
        {/* Aficiones en un array. */}
        <p className="feoAficiones">Sus aficiones son: {props.aficiones}</p>
        {/* Si props.vicios no es null, vacío o undefined; imprimo el segundo párrafo (vicios es un objeto). */}
        {props.vicios && (
          <p className="feosVicios">
            Sus vicios son: {props.vicios.primero},{props.vicios.segundo} y{" "}
            {props.vicios.tercero}
          </p>
        )}
        <p>
          <Eliminar id={props.id} />
        </p>
      </div>
    </React.Fragment>
  );
};

export default Feo;
