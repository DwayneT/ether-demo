import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4Faxdahcih6ImALinjJyu3BL75ZB4NC0',
  authDomain: 'ether-73f77.firebaseapp.com',
  projectId: 'ether-73f77',
  storageBucket: 'ether-73f77.appspot.com',
  messagingSenderId: '1007206973816',
  appId: '1:1007206973816:web:79d970b478f5cd23bf088d',
  measurementId: 'G-YBX2ZJLBHM',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
