import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyABAjDNUnohCsuKXESI6iUTB5WM2yHhgtw",
    authDomain: "firegram-clone-ad.firebaseapp.com",
    databaseURL: "https://firegram-clone-ad.firebaseio.com",
    projectId: "firegram-clone-ad",
    storageBucket: "firegram-clone-ad.appspot.com",
    messagingSenderId: "368068434461",
    appId: "1:368068434461:web:5fb3052955210cdffa84f4",
    measurementId: "G-6QPQ8YTFEQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()
const fireStorage = firebase.storage()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {firestore, fireStorage, timeStamp} 