import React from "react";

function Discente(props) {
  return (
    <React.Fragment>
      <p>
        <p>Apellidos, Nombre</p>
        <p>Curso matrícula</p>
        <p>Módulos matrícula</p>
        {/*  <p>
          {props.apellidos}, {props.nombre}
        </p>
        <p>{props.curso}</p>
        <p>{props.modulos}</p> */}
        {/* <p>
          {props.apellidos}, {props.nombre}
        </p>
        <p>{props.curso}</p>
        <p>{props.children}</p> */}
      </p>
    </React.Fragment>
  );
}

export default Discente;
