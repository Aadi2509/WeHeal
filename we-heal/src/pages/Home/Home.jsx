import React from 'react';
import './Home.scss';
import { useAuth0 } from '@auth0/auth0-react'; 
import { Link } from 'react-router-dom';


const Home = () => {
  const { isAuthenticated, user} = useAuth0();

  return (
    <div className="home">
      <div className="top">
        <h1 className='title'>Keeping you health status always connected</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet. Non accusamus galisum eos odit voluptate sit expedita deleniti. 
          Ut nobis soluta nam obcaecati beatae et laboriosam sint qui molestiae maiores.
        </p>
        {
          isAuthenticated && 
          <div>
            <p className='user-name'>Hi! {user.name}. Book your test here.</p>
            <button className='home-btn'>
              <Link to='/book' className='link'>Book now!</Link>
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Home