import React from "react";
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

const Insertar = () => {
  // Crear la función asíncrona para guarar el objeto en la base de datos.
  const guardarFeo = async () => {
    const f = document.getElementById("formulario");
    //Crear el objeto con los valores del formulario.
    const nuevoFeo = {
      nombre: f["nombre"].value,
      apellidos: f["apellidos"].value,
      aficiones: arrayUnion(f["aficiones"].value),
    };

    const feosColeccion = collection(bd, "feos");
    const feoGuardado = await addDoc(feosColeccion, nuevoFeo);
    console.log(`Feo guardado con el id ${feoGuardado.id}`);
  };

  return (
    <Formulario
      modo="nuevo"
      funcion={async () => {
        await guardarFeo();
        document.getElementById("formulario").reset();
      }}
    />
  );
};

export default Insertar;
