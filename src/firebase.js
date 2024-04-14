// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-insta-1907a.firebaseapp.com",
  projectId: "next-insta-1907a",
  storageBucket: "next-insta-1907a.appspot.com",
  messagingSenderId: "121007730467",
  appId: "1:121007730467:web:740bc390b42a87f307e696",
  measurementId: "G-KD3CBYLT7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app}
