import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss'

const Authentication = ()=>{
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            {
                // <button onClick={signInWithGoogleRedirect}>
                // Sign in with google redirect
                // </button>
            }
        </div>

            
            
        
    )
}

export default Authentication;