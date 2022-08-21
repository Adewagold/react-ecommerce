import { useEffect, useState, useContext } from "react";
import { createAuthUserWithUsernameAndPassword, createUserDocumentFromAuth, signiInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'
import "./sign-in-form.styles.scss"
import { getRedirectResult } from "@firebase/auth";
import ButtonComponent from "../button-component/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const {setCurrentUser} = useContext(UserContext);

    console.log(formFields);
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    };

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
        const {user} = await signiInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    // useEffect(()=> {
    //     async function getResult(){
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getResult();
    // }, [])

    const handleSubmit = async (event)=>{
        event.preventDefault()
        
        // const {email, password}= event.target;
        try{
           const {user} = await signInAuthWithEmailAndPassword(email, password);
           console.log(user);
           setCurrentUser(user)
        }
        catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                defaut:
                    console.log(error);
            }  
            
        }
    }


    return(
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={handleSubmit} >
        <FormInput label="Email" className="form-input" required type="email" name="email" value={email} onChange={handleChange}/>
        <FormInput label="Password" className="form-input" required type="password" name="password" value={password} onChange={handleChange}/>
        
        <div className="buttons-container">
        <ButtonComponent type="submit" buttonType="inverted">Sign In</ButtonComponent>
        <ButtonComponent type="button"
        buttonType="google" 
        onClick={signInWithGoogle}>Google Sign in
        </ButtonComponent>
        </div>
        
        </form>
        </div>
    )
}

export default SignInForm;