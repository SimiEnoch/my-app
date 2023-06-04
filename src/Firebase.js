import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAusF1_sVU6Gdv-XgtlR4oh2vQeyYOiBJc',
  authDomain: 'carsons-auth-7a317.firebaseapp.com',
  projectId: 'carsons-auth-7a317',
  storageBucket: 'carsons-auth-7a317.appspot.com',
  messagingSenderId: '812801101450',
  appId: '1:812801101450:web:c524b4092ab8f91c2e6773',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
