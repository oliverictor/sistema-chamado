import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCZL9EVpbku-r_oBbkUD9NIIpvzvzk3Ehw",
    authDomain: "sistema-f1512.firebaseapp.com",
    projectId: "sistema-f1512",
    storageBucket: "sistema-f1512.appspot.com",
    messagingSenderId: "1005049086845",
    appId: "1:1005049086845:web:02238a16e116c3505e4214",
    measurementId: "G-BRZL58MT8L"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
