import SignUpForm from '../../sign-up-form/sign-up-form-component';
import SignInForm from '../../sign-in-form/sign-in-form-component';

import './authentication.styles.scss';
const Authentication = () => {

    return (<div className='authentication-container'>

        <SignInForm></SignInForm>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button> */}
        <SignUpForm></SignUpForm>
    </div>)
}

export default Authentication;