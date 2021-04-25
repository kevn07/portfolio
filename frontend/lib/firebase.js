
// Initialize Cloud Firestore through Firebase
import * as firebase from 'firebase/app'
import * as firestore from 'firebase/firestore'
import { firebaseConfig } from './config'

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.getApp(); // if already initialized, use that one
}

export const db = firestore.getFirestore()

// export const querySnapshot = await firestore.getDocs(firestore.collection(db, "portfolio"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
