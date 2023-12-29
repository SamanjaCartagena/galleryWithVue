// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import {getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import {
   doc,collection,
  query,orderBy, 
  limit, getDoc, 
  onSnapshot, QuerySnapshot,
  updateDoc, addDoc, 
  deleteDoc, where
   }
   from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxki0aL5KCGnim9loLexsTO1RDkyobeHU",
  authDomain: "practice-dfcdf.firebaseapp.com",
  projectId: "practice-dfcdf",
  storageBucket: "practice-dfcdf.appspot.com",
  messagingSenderId: "678440662302",
  appId: "1:678440662302:web:3284c77109e292c11dc50f"
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);
     const usersCollectionRef= collection(db,'users')
         
// Initialize Firebase

export {
     db,auth, app, usersCollectionRef
}