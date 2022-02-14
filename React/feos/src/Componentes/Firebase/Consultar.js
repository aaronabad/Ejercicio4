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
} from "firebase/firestore";
import Feo from "./Feo";

const Consultar = () => {
  const [feos, setFeos] = useState(null);

  const getFeos = async () => {
    const peticion = await getDocs(collection(bd, "feos"));
    setFeos(peticion.docs);
  };
  const ninguno = "Ningún vicio";
  useEffect(() => {
    getFeos();
  }, []);

  return (
    <React.Fragment>
      {feos &&
        feos.map((d) => {
          return (
            <Feo
              key={d.id}
              id={d.id}
              nombre={d.data().nombre}
              apellidos={d.data().apellidos}
              aficiones={d.data().aficiones}
            />
          );
        })}
    </React.Fragment>
  );
};

export default Consultar;
