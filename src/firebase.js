import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyBXluHazFPzbOHWoeWKjyU0N12uqgnJFNg",
    authDomain: "waw-webbook.firebaseapp.com",
    databaseURL: "https://waw-webbook.firebaseio.com",
    projectId: "waw-webbook",
    storageBucket: "waw-webbook.appspot.com",
    messagingSenderId: "166075662993"
}

firebase.initializeApp(config)

export default firebase