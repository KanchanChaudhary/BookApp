// firebase.js for Firebase v9
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyBPQFet22IAQ0OR2udXHhDyW-31GLNY6eI",
    // authDomain: "fir-demoapp-d7135.firebaseapp.com",
    // databaseURL: "https://fir-demoapp-d7135-default-rtdb.firebaseio.com",
    // projectId: "fir-demoapp-d7135",
    // storageBucket: "fir-demoapp-d7135.appspot.com",
    // messagingSenderId: "106769452015",
    // appId: "1:106769452015:web:55fc7b06b8ba4e171b041a",
    // measurementId: "G-DGTPCPWGX5",
    apiKey: "AIzaSyAxe1MUmG_Bw_LVoJZxWXWQsvNh87eq6-Y",
  authDomain: "fir-anslyticsdemoapp.firebaseapp.com",
  databaseURL: "https://fir-anslyticsdemoapp-default-rtdb.firebaseio.com",
  projectId: "fir-anslyticsdemoapp",
  storageBucket: "fir-anslyticsdemoapp.firebasestorage.app",
  messagingSenderId: "656472017127",
  appId: "1:656472017127:web:c0434c3f7d34c1c60efa42",
  measurementId: "G-1Q294TQ1K7",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };