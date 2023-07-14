import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../App";




const Navbar = () => {
  //const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { state, dispatch } = useContext(UserContext);

  const renderButton = () => {
    if(state){
      return (
        <div className="item">
          <Link className="link" to="/logout"><button className="nav-btn">Log Out</button></Link>
        </div>
      )
    }else {
      return (
        <>
        <div className="item">
          <Link className="link" to="/signup"><button className="nav-btn">SignUp</button></Link>
        </div>
        <div className="item">
          <Link className="link" to="/login"><button className="nav-btn">Login</button></Link>
        </div>
        </>
      )
    }
  }

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
          {/* <div className="item">
            {isAuthenticated ? (
              <Link className="link" to="/tests">
                My Tests
              </Link> // Render the Tests link if the user is authenticated */}
          {/* ) : (
              <button
                className="test-check"
                onClick={() => loginWithRedirect()}
              >
                Tests
              </button> // Redirect to the login page if the user is not authenticated
            )}
          </div> */}
          <div className="item">
            <Link className="link" to="/tests">
              My Tests
            </Link>
          </div>
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
