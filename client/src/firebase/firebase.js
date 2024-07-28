import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCe54C4sObu4GIeGSC4JbRniAw5gwgZwk8",
    authDomain: "devido-60703.firebaseapp.com",
    projectId: "devido-60703",
    storageBucket: "devido-60703.appspot.com",
    messagingSenderId: "314013878008",
    appId: "1:314013878008:web:187881804749cfded25d0d",
    measurementId: "G-K4C1YW3JNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
//eslint-disable-next-line

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app