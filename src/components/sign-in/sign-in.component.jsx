import React from 'react';
import './sign-in.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../form-input/form-input.component";

import {auth,signInWithGoogle} from "../../firebase/firebase.utils";



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        
        try
        {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }
        catch (e) {
            if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found"){
                alert("Invalid Username or Password")
            }
            console.log(e);
        }
        
    };

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    };

    render() {

        return (
            <div className='sign-in'>
                <h2>I already have and Account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput
                        label='Email'    
                        name='email'
                        type='email'                        
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                                                
                    />
      

       
                    <FormInput name='password'
                           type='password'
                           label='Password'
                           value={this.state.password}
                           required
                           handleChange={this.handleChange}
                    />

                    {/*<input value='Submit Form'/>*/}
                    <div className='buttons'>

                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIN>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default SignIn;
