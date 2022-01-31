// Importar las funcones necesarias desde su biblioteca.
import firebase from "firebase/app";
import "firebase/Firestore";
// Configurar el objeto con los datos de acceso de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDhdQ0PGgIItJkWu8LaEtUtbLP6JZNzClQ",
  authDomain: "feos-90bb3.firebaseapp.com",
  projectId: "feos-90bb3",
  storageBucket: "feos-90bb3.appspot.com",
  messagingSenderId: "243531445588",
  appId: "1:243531445588:web:94e7412fb00744e6b504c1",
};

// Crear el enlace a la aplicación.
firebase.initializeApp(firebaseconfig);
// Exportar el objeto aplicación.
export { firebase };
