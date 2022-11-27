import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_N6sgLO1vPOJtuY38TvdZcLvrh-1hncI",
  authDomain: "mycanvas-a9132.firebaseapp.com",
  projectId: "mycanvas-a9132",
  storageBucket: "mycanvas-a9132.appspot.com",
  messagingSenderId: "938335843496",
  appId: "1:938335843496:web:bcd22a0fd2f8c2c493fe9d",
  measurementId: "G-YXYC93WJSB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};