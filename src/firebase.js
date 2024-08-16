// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB82p_o2L7pPkMBAg6B1JC3XUyjdVP_Vls",
  authDomain: "codele-bfb32.firebaseapp.com",
  projectId: "codele-bfb32",
  storageBucket: "codele-bfb32.appspot.com",
  messagingSenderId: "780299994074",
  appId: "1:780299994074:web:130ae277498eb00699f6e3",
  measurementId: "G-NV0SHBRQV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default firebaseConfig;

export { auth };
