import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value})
  }

  return (
    <div>
      <h1>Login to your account!</h1>
      <form action="">
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
        <button type="submit">Log In</button>
      </form>
      <Link to="/signup">Don't have account?</Link>
    </div>
  );
};

export default Login;
