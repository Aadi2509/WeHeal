import React from 'react';
import './Tips.scss';
import axios from 'axios';
import { useState } from 'react';

const Tips = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:8080/chat/completions', {prompt})
    .then((res) => {
      setResponse(res.data.reply);
    })
    .catch((err)=>{
      console.error(err);
    });
  
  }

  return (
    <div className="tips">
      <div className="prompt-div">
        <form className="chat" onSubmit={handleSubmit}>
          <div className="label">
            <label>Dear user. Get your health tips!</label>
          </div>
          <div className="input-prompt">
            <input 
              type='text'
              placeholder='Ask for health tips'
              value={prompt}
              onChange={(e)=> setPrompt(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>

        {/*response div*/}
        <div className="response-div">
          <p className='response'>
            {response}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tips