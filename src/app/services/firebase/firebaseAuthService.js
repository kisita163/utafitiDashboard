//import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";

class FirebaseAuthService {
  auth;
  firestore;
  database;
  storage;

  googleProvider;
  facebookProvider;
  twitterProvider;

   // UNCOMMENT IF YOU WANT TO USE FIREBASE
   constructor() {
     this.init();
     this.auth = firebase.auth();
     this.firestore = firebase.firestore();

     this.database = firebase.database;
     this.storage = firebase.storage;

     this.googleProvider = new firebase.auth.GoogleAuthProvider();
     this.facebookProvider = new firebase.auth.FacebookAuthProvider();
     this.twitterProvider = new firebase.auth.TwitterAuthProvider();
   }

  init = () => {
    firebase.initializeApp(firebaseConfig);
  };

  checkAuthStatus = callback => {
    this.auth.onAuthStateChanged(callback);
  };


  getDataBase = (reference) => {
     return this.database().ref(reference);
  }

  getStorage = () => {
    return this.storage().ref();
  }

  signUpWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInWithEmailAndPassword = (email, password) => {
    
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  userInfo = () => {

    return firebase.auth().currentUser;
  }

  signInWithPopup = media => {
    switch (media) {
      case "google":
        return this.auth.signInWithPopup(this.googleProvider);

      case "facebook":
        return this.auth.signInWithPopup(this.facebookProvider);

      case "twitter":
        return this.auth.signInWithPopup(this.twitterProvider);

      default:
        break;
    }
  };

  signInWithPhoneNumber = phoneNumber => {
    return this.auth.signInWithPhoneNumber(phoneNumber);
  };

  getUserData = uid => {
    
    //   generally it's better to use uid for docId
    this.firestore
      .collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        console.log(doc.data());
      });
  };

  getAllUser = () => {
    this.firestore
      .collection("users")
      .get()
      .then(docList => {
        docList.forEach(doc => {
          console.log(doc.data());
        });
      });
  };

  signOut = () => {
    return this.auth.signOut();
  };
}

const instance = new FirebaseAuthService();

export default instance;
