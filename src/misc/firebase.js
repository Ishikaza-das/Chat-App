import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBOb1qAdmv5UdkakWcIsbw8Q14bjzkRTU4',
  authDomain: 'chat-web-app-c4324.firebaseapp.com',
  databaseURL: 'https://chat-web-app-c4324-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-c4324',
  storageBucket: 'chat-web-app-c4324.appspot.com',
  messagingSenderId: '942742770683',
  appId: '1:942742770683:web:fb52d237e337027045315e',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
