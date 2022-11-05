import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => (
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
        <Link to={"/auth"} className="nav__link">
          Log-In
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
