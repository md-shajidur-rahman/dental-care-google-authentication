import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofiq";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;