// Import the functions you need from the SDKs you need
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB-anlEnbmyOPg6jK3rVHfq18KdbMrWXY",
  authDomain: "gastosapp-e46b8.firebaseapp.com",
  databaseURL: "https://gastosapp-e46b8-default-rtdb.firebaseio.com",
  projectId: "gastosapp-e46b8",
  storageBucket: "gastosapp-e46b8.appspot.com",
  messagingSenderId: "421608748564",
  appId: "1:421608748564:web:812b7c22272e2cb3865901"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const database = getDatabase();

const proveedorGoogle= new GoogleAuthProvider();

export {firebase, proveedorGoogle, database as default };