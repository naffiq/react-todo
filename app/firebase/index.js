import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyCgspj_9PSugBiMP4abt9zyM8x9IS11XzA",
    authDomain: "naffiq-todoapp.firebaseapp.com",
    databaseURL: "https://naffiq-todoapp.firebaseio.com",
    projectId: "naffiq-todoapp",
    storageBucket: "naffiq-todoapp.appspot.com",
    messagingSenderId: "624480386114"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;