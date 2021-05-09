import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUjmoDwdiuoIXDjAQQg2J5cfppybaXlUg",
  authDomain: "facebook-clone-495c6.firebaseapp.com",
  projectId: "facebook-clone-495c6",
  storageBucket: "facebook-clone-495c6.appspot.com",
  messagingSenderId: "877453982721",
  appId: "1:877453982721:web:721a0e1c01759f0f215400",
  measurementId: "G-XX0CJFYWCP"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };