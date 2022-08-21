import { Fragment } from "react";
import { signiInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect, 
    auth
 } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "@firebase/auth";
import SignUpForm from '../../sign-up-form/sign-up-form.component.jsx'

const Signin = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signiInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    useEffect(()=> {
        async function getResult(){
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        getResult();
    }, [])

    return (
        <Fragment>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
            Sign in with google poppup
            </button>

            <button onClick={signInWithGoogleRedirect}>
            Sign in with google redirect
            </button>
            <SignUpForm />
        </Fragment>
        
    )
}

export default Signin;