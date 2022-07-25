    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtToB0NyPwnTy4TUJvCsRJ78ghDMABBCE",
  authDomain: "recipe-app-d48ac.firebaseapp.com",
  projectId: "recipe-app-d48ac",
  storageBucket: "recipe-app-d48ac.appspot.com",
  messagingSenderId: "959849068300",
  appId: "1:959849068300:web:d43e4e0137ff02d11abb29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export {
  firestore,
  auth,
}
