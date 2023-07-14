import React,{useState,useEffect} from 'react';
import './Home.scss';
//import { useAuth0 } from '@auth0/auth0-react'; 
import { Link } from 'react-router-dom';


const Home = () => {
  const [userData,setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkToCallTestsPage = async () => {
    try {
      const res =await fetch("http://localhost:8000/myTests", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      const status = res.status;
      
      if(status === 400){
        throw new Error (res.err);
      }

      if(data){
       
        setUserData(data);
        
        setIsAuthenticated(true);
      }

      
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    checkToCallTestsPage();
  }, []);

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
            <p className='user-name'>Hi! {userData.username}. Book your test here.</p>
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