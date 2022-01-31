import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import Pelicula from "./Pelicula";
import Cargando from "./Cargando";

const ConsumirFirebase = (props) => {
  // Enlace a la base de datos.
  const db = firebase.firestore();
  // Enlace a la colección de documentos.
  const feosColeccion = collection(db, "feos");
  // reación del Hook para mostrar el estado de la información.
  const [feos, setFeos] = useState([]);

  const getFeos = async () => {
    const documentos = await getDocs(feosColeccion);
    console.log(documentos);
  };

  //getInfo();

  useEffect(() => {
    getFeos();
  }, []);

  return (
    <React.Fragment>
      <h1>Feos desde Firestore</h1>
      <div>{feos}</div>
    </React.Fragment>
  );
};

export default ConsumirFirebase;
