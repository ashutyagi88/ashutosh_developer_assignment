import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCp3a52o2jreDXyrrmV62aE4uglKmoyNk",
  authDomain: "assignment-project-a35d7.firebaseapp.com",
  projectId: "assignment-project-a35d7",
  storageBucket: "assignment-project-a35d7.appspot.com",
  messagingSenderId: "619155995689",
  appId: "1:619155995689:web:67b7983f271fab3717f038",
  measurementId: "G-LD53KCGXLE",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const authprovider = new GoogleAuthProvider();

export { auth, authprovider };
export default db;
