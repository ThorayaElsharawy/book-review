import firebase from  'firebase/compat/app'
import 'firebase/compat/auth' 

const app = firebase.initializeApp({
    apiKey: "AIzaSyCOjIxtyjehxE0Oe14BKOZ3MLoWvm4AIlc",
  authDomain: "auth-development-89d34.firebaseapp.com",
  projectId: "auth-development-89d34",
  storageBucket: "auth-development-89d34.appspot.com",
  messagingSenderId: "1066110614481",
  appId: "1:1066110614481:web:0783547bfc7a8ad5eb3ef0"
})

export const auth = app.auth()

export default app