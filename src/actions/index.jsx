import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { SET_USER } from './actionType'

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

export function SignInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        const user = payload.user

        const cleanUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }
        dispatch({
          type: 'SET_USER',
          user: cleanUser,
        })
        console.log(payload.user)
      })
      .catch((error) => alert(error.message))
  }
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user))
      }
    })
  }
}
