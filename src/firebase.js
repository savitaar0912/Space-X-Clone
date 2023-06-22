// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDAPmyHHms-XyA64Npe2RnQ2XItotO5YwI",
    authDomain: "space-x-be5cd.firebaseapp.com",
    projectId: "space-x-be5cd",
    storageBucket: "space-x-be5cd.appspot.com",
    messagingSenderId: "352384506734",
    appId: "1:352384506734:web:9b6e77bea7976643273f7f",
    measurementId: "G-BJT866Y4MG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { storage, auth, provider }
export default db