import React, {useState, useEffect} from 'react';
import { bd } from '../../Bibliotecas/datosFirebase';
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";

const Consultar = () => {

    const [feos, setFeos] = useState(null);

    const getFeos = async () => {
        const peticion = await getDocs(collection(bd, 'feos'));
        setFeos(peticion.docs);
    };

    useEffect( () => {
        getFeos();
    }, []);

    return (
        <React.Fragment>
            {
                feos && feos.map((documento) => {
                    return (<p>{documento.data().nombre}</p>)
                })
            }
        </React.Fragment>
    );
};

export default Consultar;