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
  const [feos, setFeos] = useState(null);

  //const actualizarFeo = async () => {};

  const getFeo = async (id) => {
    const feosColeccion = collection(bd, "feos");
    const refFeo = doc(feosColeccion, id);
    // Se obtiene el documento de la colección.
    const docFeo = await getDoc(refFeo);
    // Añado la información al estado del componente.
    setFeos(docFeo.data());
  };

  useEffect(() => {
    getFeo(props.id);
  }, []);

  return (
    <React.Fragment>
      <Formulario
        modo="editar"
        funcion={() => {
          alert("Hola");
        }}
        nombre={feos.nombre}
        apellidos={feos.apellidos}
        aficiones={feos.aficiones}
        primero={feos.vicios.primero}
        segundo={feos.vicios.segundo}
        tercero={feos.vicios.tercero}
      />
    </React.Fragment>
  );
};

export default Actualizar;
