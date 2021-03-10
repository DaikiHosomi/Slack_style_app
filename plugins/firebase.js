import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {
    apiKey: "AIzaSyDUEdSlF_tACv36Ai7GqFMqjChUw6A76UY",
    authDomain: "slack-style-app.firebaseapp.com",
    databaseURL: 'https://slack-style-app.firebaseio.com',
    projectId: "slack-style-app",
    storageBucket: "slack-style-app.appspot.com",
    messagingSenderId: "528574571271",
    appId: "1:528574571271:web:078d671cdbb8da29bddba2",
    measurementId: "G-Q2PC9G2KSV"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore()

export {
    firebase,
    db
}