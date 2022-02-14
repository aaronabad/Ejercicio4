import React, { useState, useEffect } from "react";
import { bd } from "../../Bibliotecas/datosFirebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import Formulario from "./Formulario";

const Actualizar = (props) => {
  const [feo, setFeo] = useState(null);

  const actualizarFeo = async () => {
    alert("Hola");
  };
  /*
  const getFeo = async (id) => {
    const feosColeccion = await collection(bd, "feos");
    const refFeo = await doc(feosColeccion, id);
    // Se obtiene el documento de la colección.
    const docFeo = await getDoc(refFeo);
    console.log(docFeo.data());
    // Añado la información al estado del componente.
    setFeo(docFeo.data());
    console.log(feo.nombre);
  };

  useEffect(() => {
    //getFeo(props.id);
  }, []);
  */
  return (
    <React.Fragment>
      <Formulario
        modo="editar"
        funcion={() => {
          actualizarFeo();
        }}
        nombre={props.datos.nombre}
        apellidos={props.datos.apellidos}
        aficiones={props.datos.aficiones}
        primero={props.datos.vicios.primero}
        segundo={props.datos.vicios.segundo}
        tercero={props.datos.vicios.tercero}
      />
    </React.Fragment>
  );
};

export default Actualizar;
