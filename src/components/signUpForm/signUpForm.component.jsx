import { useState, useContext } from "react";

// Creates a new user account associated with the specified email address and password.
import { createUserWithEmailAndPassword } from "firebase/auth";

//  Auth instance associated with the provided @firebase/auth
import {
  auth,
  creatUserDocFromAuth,
} from "../../utils/firebase/firebase.util.js";

import "./signUpForm.styles.scss";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";

import { UserContext } from "../../context/userContext.jsx";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setCurrentUser } = useContext(UserContext);

  // create the user and save it in the user-collection
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Creates a new user account associated with the specified email address and password.
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Returns a random integer from 0 to 9:
      const randomNumber = Math.floor(Math.random() * 10);
      const randomRoboImage = `https://robohash.org/${randomNumber}?set=set3`; // random image url

      const additionalInfo = {
        photoURL: randomRoboImage,
        displayName: username,
      };

      // save the user in user-collection
      const userRef = await creatUserDocFromAuth(user, additionalInfo);
      setCurrentUser(userRef);

      // reset the form
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log("Error creating user", error);
      // if there is any error -- we need to show the error-message in UI
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="sign-up-form-container">
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}

      <form onSubmit={onSubmitHandler}>
        <h2 className="form-heading">Don't have an account?</h2>

        <FormInput
          placeholder="Enter a username"
          type="text"
          label="Username"
          value={username}
          onChangeHandler={(e) => setUsername(e.target.value)}
          id="sign-up-input-username"
        />
        <FormInput
          placeholder="Enter your email"
          type="email"
          label="Email Address"
          value={email}
          onChangeHandler={(e) => setEmail(e.target.value)}
          id="sign-up-input-email"
        />
        <FormInput
          placeholder="Enter a password"
          type="password"
          label="Password"
          value={password}
          onChangeHandler={(e) => setPassword(e.target.value)}
          id="sign-up-input-password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <FormInput
          placeholder="Confirm your password"
          type="password"
          label="Confirm-Password"
          value={confirmPassword}
          onChangeHandler={(e) => setConfirmPassword(e.target.value)}
          id="sign-up-input-confirm-password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />

        <div className="button-group">
          <CustomButton name="Sign-Up" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
