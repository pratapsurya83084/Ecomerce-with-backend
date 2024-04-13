// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3O2nkeAlYfCCWZN_kuXBeBczu5v6nH0g",
  authDomain: "ecomerceappwithbackend.firebaseapp.com",
  projectId: "ecomerceappwithbackend",
  storageBucket: "ecomerceappwithbackend.appspot.com",
  messagingSenderId: "131475285747",
  appId: "1:131475285747:web:0e32d71a2a5d76a6e47986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//collection store in fireDB
const fireDB=getFirestore(app);
const auth=getAuth(app);
export  {fireDB,auth};
