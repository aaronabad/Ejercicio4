import React, { useState, useEffect } from "react";
import { bd } from "../../Bibliotecas/datosFirebase";
import {
  collection,
  onSnapshot,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Feo from "./Feo";
import Formulario from "./Formulario";

const Feos = () => {
  // Se crea el estado del componente que será el listado de Feos desde Firestore.
  // Se utiliza el operador ... para hacer una copia (rellenarlo con datos) y no hacer una referencia.
  const [feos, setFeos] = useState([]);
  // Se crea un estado para indicar si van a modificar los datos de un documento o no.
  // Si idActualizar es cadena vacía, el formulario creará un usuario nuevo.
  // Si isActualizar contiene algún valor, el formulario actualizará los datos.
  const [idActualizar, setIdActualizar] = useState("");

  //*********************************************************************** */
  // Función que muestra los feos existentes en la colección.
  //*********************************************************************** */
  const getFeos = () => {
    // Se crea un monitor hacia la colección de documentos "feos"
    onSnapshot(collection(bd, "feos"), (respuesta) => {
      // En cada cambio de estado de esa colección se modifica el estado del componente.
      setFeos(respuesta.docs);
    });
  };

  //*********************************************************************** */
  // Función que elimina un feo de la colección.
  //*********************************************************************** */
  const eliminarFeo = async (id) => {
    if (
      window.confirm(`¿Estás seguro de querer eliminar al feo con id ${id} ?`)
    ) {
      //await deleteDoc(doc(bd, "feos", id));
      console.log(`${id} eliminado correctamente.`);
    }
  };

  useEffect(() => {
    // Ejecuto la función getFeos() después de la creación del componente.
    getFeos();
  }, []);

  //  Operador && -> condición && expresión
  //    -> si la condición es true, React pintará la expresión,
  //    -> si la condición es false, React no pintará la expresión.
  //    -> Valores null, undefined, string vacío y cero (integer) serán evaluados a false.

  return (
    <React.Fragment>
      {/* Si cambia el estado de idActualizar, se redibuja el componente <Formulario />,
          por eso está ligado a un estado. */}
      <Formulario id={idActualizar} />
      {/* Cada vez que se modifique el estado se actualizará el componente. */}
      {feos &&
        feos.map((d) => {
          return (
            <React.Fragment>
              <Feo
                key={d.id}
                id={d.id}
                nombre={d.data().nombre}
                apellidos={d.data().apellidos}
                aficiones={d.data().aficiones}
              />
              {/* Se crea después del componente <Feo> un botón para eliminar ese feo de la colección. 
                Cuidado con asignar la función directamente (sin función flecha) ya que se ejecutará
                a medida que se imprimen los botones. Mejor usar siempre una función flecha. */}
              <input
                type="button"
                onClick={() => {
                  eliminarFeo(d.id);
                }}
                value="Borrar"
              />
              {/* Al hacer clic sobre este botón el estado idActualizar cambia
                  lo que provoca que se redibuje el componente <Formulario /> y lo haga de 
                  forma diferente (en modo actualizar datos). */}
              <input
                type="button"
                onClick={() => {
                  setIdActualizar(d.id);
                }}
                value="Actualizar"
              />
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

export default Feos;
