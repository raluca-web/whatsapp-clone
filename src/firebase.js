import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAAhslZ5TnbqfBTz_G9DWkp4orGkpWyBzg",
    authDomain: "whats-app-clone-fc28b.firebaseapp.com",
    projectId: "whats-app-clone-fc28b",
    storageBucket: "whats-app-clone-fc28b.appspot.com",
    messagingSenderId: "121908764818",
    appId: "1:121908764818:web:fee15629d01690723a064b",
    measurementId: "G-RBX4B3H7CL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;