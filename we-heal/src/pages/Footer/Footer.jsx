import React from 'react';
import './Footer.scss';
import {ImFacebook2,ImTwitter,ImInstagram } from 'react-icons/im';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
              <div className="layer">
            <div className="left">
                <span className='logo'>WE HEAL</span>
                <span className="copyright">© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
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
    </div>
  )
}

export default Footer