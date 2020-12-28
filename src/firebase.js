
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiVI9BnxispIof3SK1j7VHQQvgF6HTSwo",
    authDomain: "fbclone-6bb3e.firebaseapp.com",
    databaseURL: "https://fbclone-6bb3e-default-rtdb.firebaseio.com",
    projectId: "fbclone-6bb3e",
    storageBucket: "fbclone-6bb3e.appspot.com",
    messagingSenderId: "780006397469",
    appId: "1:780006397469:web:1469e5cf87d5333d9998f4",
    measurementId: "G-FZPS4CBWH0"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {provider, auth};
export default database;
