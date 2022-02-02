
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDhdQ0PGgIItJkWu8LaEtUtbLP6JZNzClQ",
  authDomain: "feos-90bb3.firebaseapp.com",
  projectId: "feos-90bb3",
  storageBucket: "feos-90bb3.appspot.com",
  messagingSenderId: "243531445588",
  appId: "1:243531445588:web:94e7412fb00744e6b504c1",
};

export const app = initializeApp(firebaseConfig);
export const bd = getFirestore();
//export default app;
