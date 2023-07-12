import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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
  return (
    <div>
      <h1>Register Yourself!</h1>
      <form>
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
        <button type="submit">Rgister</button>
      </form>
      <Link to="/login">Already registered?</Link>
    </div>
  );
};

export default Signup;
