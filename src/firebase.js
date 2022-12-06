// Import the functions you need from the SDKs you need
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrIZ-mMP2pGt-xcoLkrMwuJIxJp2eHO9I",
  authDomain: "tiktok-69ff8123.firebaseapp.com",
  projectId: "tiktok-69ff8123",
  storageBucket: "tiktok-69ff8123.appspot.com",
  messagingSenderId: "1082781931930",
  appId: "1:1082781931930:web:ba64e953bf7ffd6aa88223",
  measurementId: "G-FSP2GSWWNW",
};
// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;