// import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <header className="App-theme">
    <Link to='/material' style={{color: 'lightblue'}}> <p>material-ui</p> </Link>
    <Link to='/semantic' style={{color: 'lightblue'}}> <p>semantic-ui-react</p></Link>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
);

export default HomePage;