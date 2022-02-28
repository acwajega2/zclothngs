import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firestore = firebase.firestore();

firestore.collection('users')
    .doc('SOAbIe0PbOpUFCsBjiGr')
    .collection('cars')
    .doc('tzw2l6aj9U33Mc7tT7Fx')