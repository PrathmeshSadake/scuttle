import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* config object from firebase project settings documentation */
/* URL : https://console.firebase.google.com/project/scuttle-5a334/settings/general/web:YTJiZGZkZWMtOWNlNy00ZWNkLTk2MjAtZDM5ZDQwYTc1MjZj */
const config = {
    apiKey: "AIzaSyDG8wV1-JNr6lTDQhmp1w3p1w1EBSEav7Q",
    authDomain: "scuttle-5a334.firebaseapp.com",
    databaseURL: "https://scuttle-5a334.firebaseio.com",
    projectId: "scuttle-5a334",
    storageBucket: "scuttle-5a334.appspot.com",
    messagingSenderId: "962573994780",
    appId: "1:962573994780:web:f3f27bd8d6f8307ebc48d9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//check out documentation for details of below code
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;