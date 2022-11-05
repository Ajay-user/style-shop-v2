import { useState } from "react";

// Asynchronously signs in using an email and password.
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../../utils/firebase/firebase.util";

//  Auth instance associated with the provided @firebase/auth
import {
  auth,
  creatUserDocFromAuth,
} from "../../utils/firebase/firebase.util.js";

import "./sign-In-Form.styles.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // handle google login
  const handleGoogle = async () => {
    const response = await signInWithGoogle();
    await creatUserDocFromAuth(response.user);
  };

  // sign-in with email and password
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Asynchronously signs in using an email and password.
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      await creatUserDocFromAuth(user);

      // reset the form

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error creating user", error);
      // if there is any error -- we need to show the error-message in UI
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="sign-in-form-container">
      {errorMessage ? <p className="error-message">{errorMessage}</p> : ""}

      <form onSubmit={onSubmitHandler}>
        <h2 className="form-heading">Already have an account?</h2>

        <FormInput
          placeholder="Enter your email"
          type="email"
          label="Email Address"
          value={email}
          onChangeHandler={(e) => setEmail(e.target.value)}
          id="sign-in-input-email"
        />
        <FormInput
          placeholder="Enter your password"
          type="password"
          label="Password"
          value={password}
          onChangeHandler={(e) => setPassword(e.target.value)}
          id="sign-in-input-password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <h2 className="form-heading">Have a Google account?</h2>

        <div className="button-group">
          <CustomButton name="Sign-In" type="submit" />
          <CustomButton
            name="Google Sign-In"
            type="button"
            onClickHandler={handleGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
