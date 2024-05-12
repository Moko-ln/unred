// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlff9AMDJS4ertKuIo6IhwnaLjxJOFYl8",
    authDomain: "understep-3ad7e.firebaseapp.com",
    projectId: "understep-3ad7e",
    storageBucket: "understep-3ad7e.appspot.com",
    messagingSenderId: "849015249868",
    appId: "1:849015249868:web:52fee696ac5465fe65db69",
    measurementId: "G-T6QQZF7D37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };