import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD2WJiaHiI3bhTfXXzknPPZaFbfGgL3ctU",
    authDomain: "notes-arkk.firebaseapp.com",
    databaseURL: "https://notes-arkk.firebaseio.com",
    projectId: "notes-arkk",
    storageBucket: "notes-arkk.appspot.com",
    messagingSenderId: "797380584366",
    appId: "1:797380584366:web:c5fea7e76f347a43c79e3f",
    measurementId: "G-2H2SVNQG6E"
});

export { firebaseConfig as firebase };
