import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

//console.log('prawsess env', process.env.NODE_ENV)
//console.log('config', config)

let database

try {
  firebase.initializeApp(config);
  database = firebase.database()
  //console.log('database initialised')
} catch(e) {
  //console.log('error attempting to initialize app', e)
}

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export {firebase, googleAuthProvider, database as default}
