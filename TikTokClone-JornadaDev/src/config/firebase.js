import {getFirestore} from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCa8kLHh03IfHNdhaLJ1Xg7dOsWpE5qPj0",
  authDomain: "tiktok--jornada-d2776.firebaseapp.com",
  projectId: "tiktok--jornada-d2776",
  storageBucket: "tiktok--jornada-d2776.appspot.com",
  messagingSenderId: "487839521009",
  appId: "1:487839521009:web:d1799ccae67cd1684df150"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;