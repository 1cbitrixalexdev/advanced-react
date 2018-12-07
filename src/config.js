import firebase from 'firebase'

export const appName = 'advanced-react-b98e1'
export const firebaseConfig = {
    apiKey: "AIzaSyDjy64hVTAC_TmFpHnZWLEcofE9wNCAEBw",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "110867633533"
}

firebase.initializeApp(firebaseConfig)