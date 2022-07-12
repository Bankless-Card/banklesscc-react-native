//firebase.js

// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import { initializeApp } from "firebase/app"
// import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnrcCHZp59E11ns89hM-a1Xl9953sP6Lw",
  authDomain: "fir-auth-e51d2.firebaseapp.com",
  projectId: "fir-auth-e51d2",
  storageBucket: "fir-auth-e51d2.appspot.com",
  messagingSenderId: "424293883684",
  appId: "1:424293883684:web:a5a57c72a0b9fef6915db1",
  measurementId: "G-89JHL0G2WG"
};

// Initialize Firebase
let app;	// = firebase.initializeApp(firebaseConfig);

if( firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = app.auth();

export { auth };