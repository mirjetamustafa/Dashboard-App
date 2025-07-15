import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCP3sZDYhrRR2iP9FI5rUeYBC-H9Qn7a8E',
  authDomain: 'dashboard-5eb92.firebaseapp.com',
  projectId: 'dashboard-5eb92',
  //   storageBucket: 'dashboard-5eb92.firebasestorage.app',
  storageBucket: 'dashboard-5eb92.appspot.com',
  messagingSenderId: '981533726722',
  appId: '1:981533726722:web:a033d05a87d85099af2f1b',
  measurementId: 'G-7VRSPLYYCC',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app)

export { auth, provider, storage }
export default db
