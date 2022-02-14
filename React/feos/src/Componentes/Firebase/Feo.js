import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Eliminar from "./Eliminar";
import Actualizar from "./Actualizar";

const Feo = (props) => {
  return (
    <React.Fragment>
      <div id={props.id} className="feoData">
        <h3>
          {props.nombre} {props.apellidos}
        </h3>
        <p className="feoAficiones">Sus aficiones son: {props.aficiones}</p>
      </div>
    </React.Fragment>
  );
};

export default Feo;
