 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
const firebaseConfig = {
    apiKey: "AIzaSyDmsh1qd1p7SmSzip2vObhzKDtiinQFAH8",
    authDomain: "cohort-13.firebaseapp.com",
    projectId: "cohort-13",
    storageBucket: "cohort-13.appspot.com",
    messagingSenderId: "440323145771",
    appId: "1:440323145771:web:e7bdffbfb8adf0266d6a6e"
  }; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app)
export const auth = getAuth(app) 
export const storage = getStorage(app)