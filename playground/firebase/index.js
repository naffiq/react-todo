import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCgspj_9PSugBiMP4abt9zyM8x9IS11XzA",
  authDomain: "naffiq-todoapp.firebaseapp.com",
  databaseURL: "https://naffiq-todoapp.firebaseio.com",
  projectId: "naffiq-todoapp",
  storageBucket: "naffiq-todoapp.appspot.com",
  messagingSenderId: "624480386114"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'naffiq',
    age: 23
  }
}).then((data) => {
  console.log(data);
}, (error) => {
  console.warn(error);
});

const todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Sit with cat'
});

todosRef.push({
  text: 'Finish course'
});