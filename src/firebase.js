// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwBUO05MNkx9VK9kV9MwPjmhKtfVUHoX4",
  authDomain: "web-kelas-2ee9c.firebaseapp.com",
  projectId: "web-kelas-2ee9c",
  storageBucket: "web-kelas-2ee9c.appspot.com",
  messagingSenderId: "948260647151",
  appId: "1:948260647151:web:bd267496a70fa29ae76b1a",
  measurementId: "G-P1TZ912JNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
