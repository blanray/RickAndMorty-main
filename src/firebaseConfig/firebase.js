// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqpaSVx_vjOyeGn3LacN-8ROrkWNEQ4o",
  authDomain: "integrador-final-grupo2.firebaseapp.com",
  projectId: "integrador-final-grupo2",
  storageBucket: "integrador-final-grupo2.appspot.com",
  messagingSenderId: "421529329586",
  appId: "1:421529329586:web:876a48ed0681e0ff24ceab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
