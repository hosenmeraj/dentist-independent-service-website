// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX74HmdDZHA6-2rkXR2DnfHJCZpl2t5wk",
    authDomain: "dantist-mrs-sabrina.firebaseapp.com",
    projectId: "dantist-mrs-sabrina",
    storageBucket: "dantist-mrs-sabrina.appspot.com",
    messagingSenderId: "77151714611",
    appId: "1:77151714611:web:9aa47a485f29afd71a9246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;