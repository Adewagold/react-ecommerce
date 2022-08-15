import { Fragment } from "react";
import { signiInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Signin = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signiInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <Fragment>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
            Sign in with google poppup
            </button>
        </Fragment>
        
    )
}

export default Signin;