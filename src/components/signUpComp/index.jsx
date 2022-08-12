// imports
import { useState } from "react"
import { signUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from '../formInput'
import {useNavigate} from 'react-router-dom';
// form fields
const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    passwordConfirmation : ''
};
// comp start
const SignUpComp = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,passwordConfirmation} = formFields
    // navigate
    const navigate = useNavigate();
    // reset form fields
    const resetFormFields = () => setFormFields(defaultFormFields)
    // form field changes
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields,[name]: value })
    }
    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirmation){
            alert('password doesn\'t match')
            return
        }
        try{
            const {user} = await signUp(email,password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
            navigate('/')
        }
        catch (error){
            alert('error occured',error)
        }
    }
    return (
        <>
        <h5>i don't have an account</h5>
        <p>sign up with your email and password</p>
        <form onSubmit={handleSubmit}>
        <FormInput onChange={handleChange} required type="text" name="displayName" value={displayName} placeholder="name"/><br />
        <FormInput onChange={handleChange} required type="email" name="email" value={email} placeholder="email"/><br />
        <FormInput onChange={handleChange} required type="password" name="password" value={password} placeholder="password"/><br />
        <FormInput onChange={handleChange} required type="password" name="passwordConfirmation" value={passwordConfirmation} placeholder="confirm password" /><br />
        <button type="submit" className="btn btn-dark mt-4 px-4">sign up</button>
        </form>
        </>
    )
}

export default SignUpComp