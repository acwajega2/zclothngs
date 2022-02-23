import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC4TF0_tnNLG_BwVdmps1AvAgKL-Mcbi_g",
    authDomain: "zclothings-a8596.firebaseapp.com",
    projectId: "zclothings-a8596",
    storageBucket: "zclothings-a8596.appspot.com",
    messagingSenderId: "1082390512071",
    appId: "1:1082390512071:web:abe57f89acd5decbddd9e2",
    measurementId: "G-W6234ENLSB"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

