import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_BOUCKET,
  messagingSenderId: import.meta.env.VITE_MESSING_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);