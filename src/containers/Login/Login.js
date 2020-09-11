import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Login.css";
import LoginImage from '../../assets/loginSideImage.png';
import Logo from '../../components/Logo/Logo';
import axios from '../../axios';
import Auth from '../Auth/Auth';

import '../Layout/Layout.css';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';

import {
    Route,
    NavLink
  } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const onSignupHandler = () => {
    props.history.push('/signup'); 
  }
 
  const onClickHandler = () => {
    //console.log("LOGIN button was clicked!!"); 
    Auth.authenticate();
    const authData = {
      email: email,
      password: password
    }

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAI4cQDkqmyN5xRUaF3RStdHzhIEDnx94c', authData)
      .then(res => props.history.push('/template'))
      .catch(err => console.log(err)); 
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <ul className="head">
            <Logo />
            <li><NavLink to="/" replace> HOME </NavLink></li>
            <li><NavLink to="/contact" replace> CONTACT </NavLink></li>
            <li><NavLink to="/about" replace> ABOUT </NavLink></li>
            <button 
              type="submit"
              className="Button"
              onClick={(event) => onSignupHandler(event)} >
              SIGN UP
            </button>
          </ul>
          <div className="content">
            <Route exact path="/"  />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
      
      <form onSubmit={submitHandler}>
        <div className="LoginImage">
          <img src={LoginImage} alt={LoginImage} width="60%"/>
        </div>
        <div className="Text">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          autoComplete="off"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
        />
        <button 
          type="submit"
          disabled={!validateForm()} 
          onClick={() => onClickHandler()} >
            LOGIN
        </button>
        <Link to="/signup" >Need an account?</Link>
        </div>
      </form>

      <Footer/>
    </div>  
  );
}

export default Login;