// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

// https://chat-app-f6b4a-default-rtdb.firebaseio.com/

const firebaseConfig = {
  apiKey: "AIzaSyAeg_9HMSnqsRVcQZuZF6MfVLpAm1jGe5M",
  authDomain: "chat-app-f6b4a.firebaseapp.com",
  projectId: "chat-app-f6b4a",
  storageBucket: "chat-app-f6b4a.appspot.com",
  messagingSenderId: "573619150925",
  appId: "1:573619150925:web:bfd3cd4cf2797611c17c04",
  // databaseUrl:"https://chat-app-f6b4a-default-rtdb.firebaseio.com"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

