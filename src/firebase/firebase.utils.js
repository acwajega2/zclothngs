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


export const createUserProfileDocument = async (userAuth,data) =>{
    if (!userAuth) return ;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if (!snapShot.exists){
        //----------> User Does not exist
      const {displayName,email} = userAuth;
      const createDate = new Date();            
      try
      {
          await userRef.set({
                displayName,email,createDate, ...data})        
      }
      catch (e) {
          console.log('error creating user', e.message)
      }
    }
    
    return userRef;
    //----> check if document exists
    
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

