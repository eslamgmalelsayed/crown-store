// imports
import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import {signInWithGooglePopup, createUserDocumentFromAuth,signIn} from '../../utils/firebase/firebase.utils'
import './signIn.scss'
import { FormInput } from '../formInput'
// form fields
const defaultFormFields = {
    email : '',
    password : '',
};
const SignInComp = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    // navigate
    const navigate = useNavigate();
    // reset form fields
    const resetFormFields = () => setFormFields(defaultFormFields)
    // form field changes
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields,[name]: value })
    }
    // sign in form
    const handleSignIn = async (e) => {
        e.preventDefault()
        try{
            const reponse = await signIn(email,password)
            resetFormFields()
            navigate('/')
        }
        catch (error){
            alert('error occured',error)
        }
    }
        // pop up
        const logGoogleUser = async () => {
         await signInWithGooglePopup()
         navigate('/')
        }
    return (
        <>
        <h5>already have an account ?</h5>
        <p>sign in with your email and password</p>
        <FormInput onChange={handleChange} required type="email" name="email" value={email} placeholder="email"/><br />
        <FormInput onChange={handleChange} required type="password" name="password" value={password} placeholder="password" /><br />
        <button onClick={handleSignIn} className="btn btn-dark me-3 px-4 mt-4">sign in</button>
        <button onClick={logGoogleUser} className="btn btn-primary px-2 mt-4">sign in with Google</button>
        </>
    )
}

export default SignInComp