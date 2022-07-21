// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgy4_YS0IcuJhXDIVxF-ZAbNzChYv1E4",
  authDomain: "library-book-list-7fedf.firebaseapp.com",
  projectId: "library-book-list-7fedf",
  storageBucket: "library-book-list-7fedf.appspot.com",
  messagingSenderId: "306746608557",
  appId: "1:306746608557:web:7447d16a92f03edd49af24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {
    firestore
}