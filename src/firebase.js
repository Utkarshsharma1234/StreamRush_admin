import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEL5QWddDdSpowBKNyPLFH1-5Fsh1FTNI",
  authDomain: "video-streaming-39225.firebaseapp.com",
  projectId: "video-streaming-39225",
  storageBucket: "video-streaming-39225.appspot.com",
  messagingSenderId: "141725022841",
  appId: "1:141725022841:web:1aa888665ab32b10f272a8",
  measurementId: "G-ZWZGK8J3B6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;