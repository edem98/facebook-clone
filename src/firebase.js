import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUmbWFi4jF9bdzQO1w79pgMXwxHTxqK2c",
  authDomain: "facebook-clone-2a4d1.firebaseapp.com",
  databaseURL: "https://facebook-clone-2a4d1.firebaseio.com",
  projectId: "facebook-clone-2a4d1",
  storageBucket: "facebook-clone-2a4d1.appspot.com",
  messagingSenderId: "23775911297",
  appId: "1:23775911297:web:ab49dfed7f9d81beec1c80",
  measurementId: "G-WQCCNRN3KC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const priovider = new firebase.auth.GoogleAuthProvider();

export { db, auth, priovider };
