
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCFb7fUBXrDwm0JIc8XBVIqp5EHI2iuvyU",
  authDomain: "bun-co.firebaseapp.com",
  projectId: "bun-co",
  storageBucket: "bun-co.appspot.com",
  messagingSenderId: "1095381958203",
  appId: "1:1095381958203:web:849740c51c7658c8f4661e",
  measurementId: "G-VKXHHL8HFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export default app