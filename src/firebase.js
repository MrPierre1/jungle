import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBg7wUWXJKusGKyjKa3dsOHZ1ursv7GlnA",
    authDomain: "fir-1-869f7.firebaseapp.com",
    databaseURL: "https://fir-1-869f7.firebaseio.com",
    projectId: "fir-1-869f7",
    storageBucket: "fir-1-869f7.appspot.com",
    messagingSenderId: "684382672080",
    appId: "1:684382672080:web:de14c9a203eba064a37ad5",
    measurementId: "G-G9H6LFS92L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

