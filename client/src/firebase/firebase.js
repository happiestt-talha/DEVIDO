import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDrJjbYM66I741DvjkyiH8Bd0cRZKtySM0",
    authDomain: "devido-77818.firebaseapp.com",
    projectId: "devido-77818",
    storageBucket: "devido-77818.appspot.com",
    messagingSenderId: "1090295189293",
    appId: "1:1090295189293:web:ddfde6904ae3aa19b60da4",
    measurementId: "G-6LR16YNEBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app