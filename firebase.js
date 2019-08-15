import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyA1KfnAWNp2hSu-fGXpDrOdX6jap4ICLiU",
    authDomain: "migg-63592.firebaseapp.com",
    databaseURL: "https://migg-63592.firebaseio.com",
    projectId: "migg-63592",
    storageBucket: "migg-63592.appspot.com",
    messagingSenderId: "32087990833",
    appId: "1:32087990833:web:c571e8790b53f035"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();