import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnNrvFPNMaljJHn-hgJNto2ba3x3hxNLc",
    authDomain: "awesomecommerce-62cdf.firebaseapp.com",
    projectId: "awesomecommerce-62cdf",
    storageBucket: "awesomecommerce-62cdf.appspot.com",
    messagingSenderId: "1075170676368",
    appId: "1:1075170676368:web:ababae8dacededd1e05215"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //provider
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt: "select_account"
  })


export const auth  = getAuth(); 
export const signiInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>  {
    if(!userAuth) return;
    //create a new document with a unique id in the db
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    //check the snapshot of the document
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    //Check if the reference exists
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt,
                ...additionalInformation,
                
            })
        }
        catch(error){
            console.log('error creating the user', error);
        }
    }
    return userDocRef;
    //If user data does not exists
    //create / set the document with the data from userAuth in my collection
    //Chec if user data exists

    //return userDocReference
    
}


export const createAuthUserWithUsernameAndPassword = async(email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
} 