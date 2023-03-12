// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "pokemon-db-b4e8f",
  storageBucket: "pokemon-db-b4e8f.appspot.com",
  messagingSenderId: "514200861454",
  appId: "1:514200861454:web:dedd9d9a9a211e73f4755f",
  measurementId: "G-L9SCW5ZB1M",
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
export const colRef = collection(db, 'pokemon');
