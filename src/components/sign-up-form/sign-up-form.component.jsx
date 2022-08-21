import { useState , useContext} from "react";
import { createAuthUserWithUsernameAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'
import "./sign-up-form.styles.scss"
import ButtonComponent from "../button-component/button.component";
import { UserContext } from "../../contexts/user.context";

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
    const val = useContext(UserContext);

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
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit} >
        <FormInput 
        label="Display name" 
        required 
        type="text" 
        name="displayName" 
        value={displayName} 
        onChange={handleChange}
        />
        <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange}/>
        <FormInput label="Password" required type="password" name="password" value={password} onChange={handleChange}/>
        <FormInput label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
        <ButtonComponent type="submit">Sign Up</ButtonComponent>
        </form>
        </div>
    )
}

export default SignUpForm;