import React from 'react';
import './Book.scss';
import { useState } from 'react';

const Book = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Clear form inputs
    setName('');
    setEmail('');
    setMobile('');
    setAge('');
  };

  return (
    <div className="book">
      <div className="top">
        <h1 className="title">Book your test here!</h1>
      </div>
      <div className="bottom">
      <form className="book-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="text"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
            <input
              type="text"
              placeholder="Enter your age"
              value={age}
              onChange={handleAgeChange}
              required
            />
            <div className="dropdown">
              <label for="my-dropdown">Select test:</label>
              <select name="dropdown" id='my-dropdown'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="dropdown">
              <label for="my-dropdown1">Select gender:</label>
              <select name="dropdown" id='my-dropdown1'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="dropdown">
              <label for="my-dropdown2">Select service:</label>
              <select name="dropdown" id='my-dropdown2'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <button type="submit" className='btn'>Book test</button>
          </form>
      </div>
    </div>
  )
}

export default Book