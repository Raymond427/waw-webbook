import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/performance'

const config = {
    apiKey: 'AIzaSyBXluHazFPzbOHWoeWKjyU0N12uqgnJFNg',
    authDomain: 'waw-webbook.firebaseapp.com',
    databaseURL: 'https://waw-webbook.firebaseio.com',
    projectId: 'waw-webbook',
    storageBucket: 'waw-webbook.appspot.com',
    messagingSenderId: '166075662993',
    appId: '1:166075662993:web:281d0382e1aabf2a34b530'
}

firebase.initializeApp(config)

export const performanceMonitor = firebase.performance()

export const auth = firebase.auth()
export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(googleProvider)
}

export const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    return auth.signInWithPopup(facebookProvider).then(({ user }) => ({ user: { ...user } }))
}

export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const sendPasswordResetEmail = emailAddress => auth.sendPasswordResetEmail(emailAddress)
export const verifyPasswordResetCode = actionCode => auth.verifyPasswordResetCode(actionCode)
export const handlePasswordReset = (actionCode, newPassword) => auth.confirmPasswordReset(actionCode, newPassword)

const firestore = firebase.firestore()
firestore.settings({})
export const postFeedback = feedback => firestore.collection('/feedback').add(feedback)
export const getChapters = () => firestore.collection('/chapters').get()
export const getOrders = uid => firestore.collection('/orders').where('userId', '==', uid).orderBy('datePurchased', 'desc').get()
export const orderSubscription = uid => firestore.collection('/orders').where('userId', '==', uid).orderBy('datePurchased', 'desc')
export const postOrder = order => firestore.collection('/orders').add(order)

export default firebase