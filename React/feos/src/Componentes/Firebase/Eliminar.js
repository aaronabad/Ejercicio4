import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { bd } from "../../Bibliotecas/datosFirebase";

const Eliminar = (props) => {
  const eliminarFeo = async () => {
    await deleteDoc(doc(bd, "feos", props.id));
    console.log(`${props.id} eliminado correctamente.`);
  };

  /* 
    onClick espera una función.
    Si es necesario usar parámetros hay que pasarle uns función flecha a modo de manejador.
    */

  return (
    <React.Fragment>
      <button onClick={eliminarFeo}>Eliminar</button>
    </React.Fragment>
  );
};

export default Eliminar;
