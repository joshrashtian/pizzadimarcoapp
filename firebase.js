// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfMUmjk3JcV6JcLelyZgTGR0rZs_D_IUA",
  authDomain: "pizza-dimarco.firebaseapp.com",
  projectId: "pizza-dimarco",
  storageBucket: "pizza-dimarco.appspot.com",
  messagingSenderId: "1755117027",
  appId: "1:1755117027:web:e7a0823976f50c04ac5cd6",
  measurementId: "G-0L4N986HSV"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

const analytics = getAnalytics(app);

export { analytics };

export const database = getFirestore(app);