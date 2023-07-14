import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-1i5hsv2tj5swdbam.us.auth0.com"
  //   clientId="4jcYMWlRwvSzTXQaRpGqVjF98zlnHRPe"
  //   redirectUri={window.location.origin}
  // >
    <App />,
  // </Auth0Provider>,
  document.getElementById('root')
);
