import { firbaseAuth } from './config';

const { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } = firbaseAuth;

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authService = {
  googleServise: () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },
  signoutAuth: () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  },
  authUser: () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        console.log('id : ', uid);
        console.log('user : ', user);
      } else {
        // User is signed out

        console.log('SIGNOUT CANT ENTER................................');
      }
    });
  },
};
