// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJtM2F_j_UPcbOTJVMgS5jugYpkbzRses",
  authDomain: "chat-app-react-b0810.firebaseapp.com",
  projectId: "chat-app-react-b0810",
  storageBucket: "chat-app-react-b0810.appspot.com",
  messagingSenderId: "215481148873",
  appId: "1:215481148873:web:bd83bf0dc0a910110f3418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)