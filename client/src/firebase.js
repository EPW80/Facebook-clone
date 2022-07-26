import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBg-aVzN6YMf-CYWlG67RuX883CZxSpLQ0',
  authDomain: 'gqlreactnode420.firebaseapp.com',
  // databaseURL: 'https://gqlreactnode420.firebaseio.com',
  projectId: 'gqlreactnode420',
  storageBucket: 'gqlreactnode420.appspot.com',
  // messagingSenderId: '730125371691',
  appId: '1:730125371691:web:2a94f8e10e949ae6e25d6e',
  measurementId: 'G-435QV1G927'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
