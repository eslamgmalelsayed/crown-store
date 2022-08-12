// imports
import SignInComp from '../../components/signInComp'
import SignUpComp from '../../components/signUpComp'

// app start
const SignIn = () => {
  return (
    <div className="sign-in pt-5">
       <div className="row">
        <div className="col-md">
          <SignInComp />
        </div>
        <div className="col-md">
          <SignUpComp />
        </div>

       </div>
    </div>
  );
}

export default SignIn;
