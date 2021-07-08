import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

firebase.initializeApp(
    {
        apiKey: "AIzaSyA4O0zljVHYK4OPz8V6VXtyorKxuzvCPPU",
        authDomain: "insta-reels-69846.firebaseapp.com",
        projectId: "insta-reels-69846",
        storageBucket: "insta-reels-69846.appspot.com",
        messagingSenderId: "543675654159",
        appId: "1:543675654159:web:295d5077a29d95f07c837a"
    }
)

export const auth = firebase.auth();
const firestore = firebase.firestore();

export const database = {
    users: firestore.collection('users'),
    getcurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();