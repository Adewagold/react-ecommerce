import { useState } from "react";
import { createAuthUserWithUsernameAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    };

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(password!== confirmPassword){
            alert("Password does not match")
            return;
        }
        
        // const {email, password}= event.target;
        try{
            const {user} = await createAuthUserWithUsernameAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            console.log(user);
            setFormFields(defaultFormFields);
        }
        catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }else{
                
            }
            console.log("An error occured while creating user", error);
        }
    }


    return(
        <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit} >
        <FormInput 
        label="Display name" 
        
        className="form-input" 
        required 
        type="text" 
        name="displayName" 
        value={displayName} 
        onChange={handleChange}
        />
        <FormInput label="Email" className="form-input" required type="email" name="email" value={email} onChange={handleChange}/>
        <FormInput label="Password" className="form-input" required type="password" name="password" value={password} onChange={handleChange}/>
        <FormInput label="Confirm Password" className="form-input" required type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
        <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default SignUpForm;