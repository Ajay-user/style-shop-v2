import "./sign-in.styles.scss";

import {
  signInWithGoogle,
  creatUserDocFromAuth,
} from "../../utils/firebase/firebase.util.js";

const handleGoogle = async () => {
  const response = await signInWithGoogle();
  console.log(response);
  creatUserDocFromAuth(response.user);
};

const SignIn = () => (
  <div className="sign-in-page">
    <h1>Hello from sign-in</h1>
    <button onClick={handleGoogle}>Sign-in</button>
  </div>
);

export default SignIn;
