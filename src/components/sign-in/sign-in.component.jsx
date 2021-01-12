import './sign-in.styles.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({ email: "", password: "" })

    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValue({ [name]: value })
    }


    return (
        <div className='sign-in'>
            <h2> I already have an account </h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={value.email}
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={value.password}
                    handleChange={handleChange}
                    label='password'
                    required />
                <div className='buttons'>
                    <CustomButton type="submit" > Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                    Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;