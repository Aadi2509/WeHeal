import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import {ImFacebook2,ImTwitter,ImInstagram } from 'react-icons/im';

const About = () => {
  return (
    <div className="about">
    <div className="top">
      <h1>About us</h1>
    </div>
    <div className="bottom">
      <p className='desc'>
        Lorem ipsum dolor sit amet. Hic dolores voluptatem est libero dolorem ea soluta voluptatem sit natus illum. 
        Aut voluptatem aliquam quo eveniet incidunt aut nostrum fugit. Et atque illum est labore velit est adipisci sapiente.
        Rem porro laudantium et laboriosam adipisci et atque delectus et delectus omnis. 
        Ad itaque officiis et dolor facilis et dolorem quaerat qui perferendis fuga qui autem accusantium. 
        Aut dolor saepe id corporis voluptatem vel possimus repudiandae est sunt eveniet 33 incidunt omnis 33 dicta vitae! 
        Ut autem odio est recusandae veritatis sed cumque sequi vel asperiores galisum?
      </p>
      <p className='sub-desc'>Stay connected with us</p>
      <h4 className='email'>wehealorg@yopmail.com</h4>
      <div className="icons">
        <Link to='' className='link'>
            <ImFacebook2/>
        </Link>
        <Link to='' className='link'>
            <ImTwitter/>
        </Link>
        <Link to='' className='link'>
            <ImInstagram/>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default About