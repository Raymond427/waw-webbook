import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBXluHazFPzbOHWoeWKjyU0N12uqgnJFNg",
    authDomain: "waw-webbook.firebaseapp.com",
    databaseURL: "https://waw-webbook.firebaseio.com",
    projectId: "waw-webbook",
    storageBucket: "waw-webbook.appspot.com",
    messagingSenderId: "166075662993"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)
export const signInWithGoogle = () => auth.signInWithPopup(provider)
firestore.settings({})

export default firebase