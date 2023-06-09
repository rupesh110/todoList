import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiYLVzbjU6GZ3w9GZoCfrig0AcA4BaIoU",
    authDomain: "todolist-1b31c.firebaseapp.com",
    projectId: "todolist-1b31c",
    storageBucket: "todolist-1b31c.appspot.com",
    messagingSenderId: "689134948251",
    appId: "1:689134948251:web:f8dd1dafd339f5e0a75b3e",
    measurementId: "G-JJ8DMSFPBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
