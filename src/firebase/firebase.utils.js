import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBnFiCspAioyBqNpAe98YphSuSwNJcbU4Y',
  authDomain: 'crwn-db-ab3ff.firebaseapp.com',
  projectId: 'crwn-db-ab3ff',
  storageBucket: 'crwn-db-ab3ff.appspot.com',
  messagingSenderId: '178225096353',
  appId: '1:178225096353:web:fd42e95d0fecdacadf72e0',
  measurementId: 'G-WH01NVV2VE'
};

export const createUserProfileDocument = async  (userAuth, additionalData) => {
     if (!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     if (!snapShot.exists) {
       const { displayName, email } = userAuth;
       console.log(displayName);
       const createdAt = new Date();
  
       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         }
  
        )
       } catch (error) {
         console.log('error creating user', error.message)
      }
    }
  
     return userRef;
 }


 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title);
      batch.set(newDocRef, obj)
    });
    return await batch.commit()
 }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;