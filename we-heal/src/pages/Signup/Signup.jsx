import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  let name,value;
  const handleInputs =(e) => {
    name=e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const PostDataToBackend = async (e) => {
    e.preventDefault();
    const {username,email,password}=user;

    const res = await fetch('http://localhost:8000/register/signup',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        username,email,password
      })
    });

    const data =res.json();
    if(data.status === 400 || !data){
      window.alert("Invalid Registration");
    }else{
      window.alert("Registered");
      navigate("/login");
    }
  }

  return (
    <div>
      <h1>Register Yourself!</h1>
      <form method="POST">
        <input
          type="text"
          placeholder="Üsername"
          name="username"
          value={user.username}
          onChange={handleInputs}
        />
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
        <button type="submit" name="signup" onClick={PostDataToBackend}>Register</button>
      </form>
      <Link to="/login">Already registered?</Link>
    </div>
  );
};

export default Signup;
