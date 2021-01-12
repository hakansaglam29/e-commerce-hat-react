import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnFiCspAioyBqNpAe98YphSuSwNJcbU4Y",
    authDomain: "crwn-db-ab3ff.firebaseapp.com",
    projectId: "crwn-db-ab3ff",
    storageBucket: "crwn-db-ab3ff.appspot.com",
    messagingSenderId: "178225096353",
    appId: "1:178225096353:web:fd42e95d0fecdacadf72e0",
    measurementId: "G-WH01NVV2VE"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;