import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Navigation = () => {
  // current User from the context
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav-container">
        <div className="logo-box">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="nav__links">
          <Link to={"/shop"} className="nav__link">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav__link" onClick={signOutUser}>
              Log-Out
            </span>
          ) : (
            <Link to={"/auth"} className="nav__link">
              Log-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
