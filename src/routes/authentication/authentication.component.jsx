import "./authentication.styles.scss";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import SignInForm from "../../components/sign-In-Form/sign-In-Form.component";

const Authentication = () => {
  return (
    <div className="authentication-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
