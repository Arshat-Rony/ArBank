import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDleCRxsRNhAcP0CE8-AU2wKUV7Nheu_vs",
    authDomain: "arbank-294a1.firebaseapp.com",
    projectId: "arbank-294a1",
    storageBucket: "arbank-294a1.appspot.com",
    messagingSenderId: "265016354567",
    appId: "1:265016354567:web:ff75efccbba35d5baa87a2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;