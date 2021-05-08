import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkMiq1B6rNqMj1T1Mf2D-BqZEORYF2PvM",
  authDomain: "crwn-db-dea32.firebaseapp.com",
  projectId: "crwn-db-dea32",
  storageBucket: "crwn-db-dea32.appspot.com",
  messagingSenderId: "370759371494",
  appId: "1:370759371494:web:95680a50908d03a2618927",
  measurementId: "G-4NQZJ767W6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;