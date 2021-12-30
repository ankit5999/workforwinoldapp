// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMS6zzQpTKkU_jDbCqA7yOS48wJSev7cw",
  authDomain: "work-for-win-company.firebaseapp.com",
  databaseURL: "https://work-for-win-company.firebaseio.com",
  projectId: "work-for-win-company",
  storageBucket: "work-for-win-company.appspot.com",
  messagingSenderId: "817600449676",
  appId: "1:817600449676:web:b47c7eaaf147f2bc103fa9",
  measurementId: "G-SV9NGWF1QV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
