import * as firebase from 'firebase'

var config = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://expensify-test-6fbfc.firebaseio.com", //process.env.FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config);

const database = firebase.database()

export {firebase, database as default}

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109500,
//   createdAt: 123456789

// })

// database.ref('expenses').push({
//   description: 'Phone Bill',
//   note: '',
//   amount: 5900,
//   createdAt: 123456791

// })

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 1200,
//   createdAt: 123456790

// })

// database.ref().set({
//   name: 'Andrew Michitson',
//   age: 55,
//   employer: 'AMZN',
//   location: {
//     city: 'Richmond',
//     country: 'UK'
//   }
// })

// database.ref().once('value')
//   .then((snapshot) => {
//   const val = snapshot.val()
//   console.log('value returned', val)
// }).catch((a) => {
//   console.log('error fetching data', e)
// })

//const promise = new Promise((resolve, reject) => { })






