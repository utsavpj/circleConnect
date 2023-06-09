// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3YCCMQxEM-4MUb3xqyLJ0xB2yvxKdXPE",
  authDomain: "circleconnect142.firebaseapp.com",
  projectId: "circleconnect142",
  storageBucket: "circleconnect142.appspot.com",
  messagingSenderId: "215933679648",
  appId: "1:215933679648:web:cbaa68f3c3ad1fda8ee445",
  measurementId: "G-9EW2QZDLB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const database = getDatabase(app);
export const storage = getStorage(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth }
export {db}
export default app;



