import {initilizeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initilizeApp({
    apiKey: "AIzaSyD-9tSrke72PouXyXK0W0q5Z6Z4Z3jYQ1E",
    authDomain: "instagram-clone-2f0e9.firebaseapp.com",
    projectId: "instagram-clone-2f0e9",
    storageBucket: "instagram-clone-2f0e9.appspot.com",
    messagingSenderId: "1050460099290",
    appId: "1:1050460099290:web:6b6b0b0b0b0b0b0b0b0b0b",
    measurementId: "G-TV6c3Z"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todoCol = collection(db, "todos");
const snapshot = await getDocs(todoCol);


onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("logged in");
    }else{  
        console.log("No User");
    }
});