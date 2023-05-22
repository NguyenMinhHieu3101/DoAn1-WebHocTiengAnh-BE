// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSNXUFA74ZQIXDcyfdl3W_4RRJRVXNkK8",
    authDomain: "engplayground-c3530.firebaseapp.com",
    projectId: "engplayground-c3530",
    storageBucket: "engplayground-c3530.appspot.com",
    messagingSenderId: "391916469008",
    appId: "1:391916469008:web:433adddf0d29d8408c8395",
    measurementId: "G-RVT73PK0B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage };