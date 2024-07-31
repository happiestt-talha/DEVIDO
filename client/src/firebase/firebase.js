import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBmItkZ6Tt7qAu8J26rBOoNdUHxjeeECJM",
    authDomain: "deved-ea838.firebaseapp.com",
    projectId: "deved-ea838",
    storageBucket: "deved-ea838.appspot.com",
    messagingSenderId: "597499536630",
    appId: "1:597499536630:web:ca5cc6575ce624079778d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
//eslint-disable-next-line

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app