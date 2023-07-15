import React from "react";
import "./Book.scss";
import { useState } from "react";

const Book = () => {
  const [val,setVal] = useState();
  const handleChange = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear form inputs
    // setName("");
    // setMobile("");
    // setAge("");
  };

  return (
    <div className="book">
      <div className="top">
        <h1 className="title">Book your test here!</h1>
      </div>
      <div className="bottom">
        <form className="book-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" name="name"  required />
          <input type="number" placeholder="Your Mobile Number" name="phoneNumber" required />
          <input type="number" placeholder="Enter your age" name="age" required />
          <input type="text" placeholder="Your Address" name="address" required/>
          <input type="date" placeholder="Date" name="date" value={val} onChange={handleChange} required/>
          <div className="dropdown">
            <label for="my-dropdown">Select test:</label>
            <select name="dropdown" id="my-dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="dropdown">
            <label for="my-dropdown1">Select gender:</label>
            <select name="dropdown" id="my-dropdown1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="dropdown">
            <label for="my-dropdown2">Select service:</label>
            <select name="dropdown" id="my-dropdown2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Book test
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
