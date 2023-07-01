import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrN8KRP5O37D23l6unLB36o-KjKd4j9_0",
  authDomain: "ozik-project.firebaseapp.com",
  projectId: "ozik-project",
  storageBucket: "ozik-project.appspot.com",
  messagingSenderId: "18510298939",
  appId: "1:18510298939:web:dcb7868c9b47390eaf011e",
  measurementId: "G-MX67R6PWWR",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
