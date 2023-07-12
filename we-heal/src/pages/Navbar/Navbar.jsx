import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/tips">
              Tips
            </Link>
          </div>
        </div>
        <div className="centre">
          <div className="item">
            <Link className="link" to="/">
              <span className="logo">WE HEAL</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            {isAuthenticated ? (
              <Link className="link" to="/tests">
                My Tests
              </Link> // Render the Tests link if the user is authenticated
            ) : (
              <button
                className="test-check"
                onClick={() => loginWithRedirect()}
              >
                Tests
              </button> // Redirect to the login page if the user is not authenticated
            )}
          </div>
          <div className="item">
            {/* Render login or logout button based on authentication state */}
            {isAuthenticated ? (
              <button className="nav-btn" onClick={() => logout()}>
                Logout
              </button>
            ) : (
              <button className="nav-btn" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </div>
          <div className="item">
            <Link className="link" to='/signup'><button className="nav-btn">SignUp</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
