import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAInJjBAoaknpfvAp258TB83zrLm0JEiiU',
  authDomain: 'clone-a61fb.firebaseapp.com',
  projectId: 'clone-a61fb',
  storageBucket: 'clone-a61fb.appspot.com',
  messagingSenderId: '607886665201',
  appId: '1:607886665201:web:eae1326605abceacb45050',
  measurementId: 'G-D874BEPT2Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
