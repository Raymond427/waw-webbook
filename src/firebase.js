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

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(googleProvider)
}
export const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    return auth.signInWithPopup(facebookProvider).then(({ user: { photoURL, email } }) => ({
            user: {
                photoURL,
                email
            }
    }))
}

export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const sendPasswordResetEmail = emailAddress => auth.sendPasswordResetEmail(emailAddress)
export const verifyPasswordResetCode = actionCode => auth.verifyPasswordResetCode(actionCode)
export const handlePasswordReset = (newPassword, actionCode) => auth.confirmPasswordReset(newPassword, actionCode)

firestore.settings({})

export default firebase