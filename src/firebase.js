import firebase from 'firebase/app'
import 'firebase/firestore'

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
firestore.settings({})

export default firebase