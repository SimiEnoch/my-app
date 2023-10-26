// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBau8j6zHtv7iTbM3RU2fV9Y-ZkgDw1dBI",
  authDomain: "carsons--auth.firebaseapp.com",
  projectId: "carsons--auth",
  storageBucket: "carsons--auth.appspot.com",
  messagingSenderId: "204259406520",
  appId: "1:204259406520:web:c8e307f8d959fd8533ba4d",
  measurementId: "G-SL936N6N4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
