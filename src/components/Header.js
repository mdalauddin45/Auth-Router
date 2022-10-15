import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const abc = useContext(AuthContext);
  console.log("context", abc);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          SufiBrother
        </Link>
        <Link to="home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="login" className="btn btn-ghost normal-case text-xl">
          Log in
        </Link>
        <Link to="register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
