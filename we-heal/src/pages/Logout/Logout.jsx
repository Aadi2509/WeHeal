import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const callLogOutPage = async () => {
    try {
      const res = await fetch("http://localhost:8000/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res) {
        navigate("/login", { require: true });
        if(res.status !== 200){
            throw new Error(res.error);
        }
      } else{
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callLogOutPage();
  },[]);

  return <div>logout page</div>;
};

export default Logout;
