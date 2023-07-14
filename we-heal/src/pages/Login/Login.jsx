import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";


const Login = () => {
  const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostDataToBackend = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch("http://localhost:8000/register/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    
    if (!data || res.status === 400) {
      window.alert("Invalid Credentials");
    }else if(res.status===401){
      window.alert("Please register yourself first")
      navigate("/signup");
    } else {
      console.log("reached here");
      dispatch({type:'USER',payload:true});
      window.alert("Log in Successful");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Login to your account!</h1>
      <form method="POST">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleInputs}
        />
        <button type="submit" name="login" onClick={PostDataToBackend}>
          Log In
        </button>
      </form>
      <Link to="/signup">Don't have account?</Link>
    </div>
  );
};

export default Login;
