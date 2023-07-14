import React from "react";
import "./Tests.scss";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tests = () => {
  const navigate = useNavigate();
  const checkToCallTestsPage = async () => {
    try {
      const res = fetch("http://localhost:8000/myTests", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = (await res).status;
      
      if(data === 400){
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkToCallTestsPage();
  }, []);

  const data = [
    {
      patientname: "Alex Smith",
      labname: "Apollo labs",
      testname: "Hepatitis",
      date: "12/09/2023",
      status: "Pending",
    },
    {
      patientname: "John Doe",
      labname: "Pinnacle",
      testname: "HCG",
      date: "21/01/2019",
      status: "Successful",
    },
  ];
  return (
    <div className="tests">
      <div className="top">
        <p className="desc">
          Check your test status and download your reports here.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Tests;
