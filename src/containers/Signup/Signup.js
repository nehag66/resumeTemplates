import React, { useState } from "react";
import "./Signup.css";
import LoginImage from '../../assets/signupImage.jpg';
import axios from '../../axios';
import Logo from '../../components/Logo/Logo';

import '../Layout/Layout.css';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';

import {
    Route,
    NavLink
} from "react-router-dom";

const Signup = (props) => {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirm, setConfirm] = useState("");

  const validateForm = () => {
    return (name.length >0 && 
          email.length > 0 && 
          password.length > 0 && 
          password===confirm
    ); 
  }

  const onSigninHandler = () => {
    props.history.push('/login'); 
  }

  const onClickHandler = () => {
    //console.log("Signup button was clicked");
    props.history.push('/login');

    const details = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirm
    }
    
    axios.post('/loginDetails.json', details)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));

    const authData = {
      email: email,
      password: password
    }  

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAI4cQDkqmyN5xRUaF3RStdHzhIEDnx94c', authData)
      .then(res => console.log(res))
      .catch(err => console.log(err));  

  }

  const handleSubmit = (event) => {
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
              onClick={(event) => onSigninHandler(event)} >
              SIGN IN
            </button>
          </ul>
          <div className="content">
            <Route exact path="/"  />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
          
      <form onSubmit={handleSubmit}>
        <div className="LoginImage">
          <img src={LoginImage} alt={LoginImage} width="60%" height="400px"/>
        </div>
        <div className="Text">
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your Full Name"
          value={name}
          autoComplete="off"
          onChange={e => setName(e.target.value)}
        />  
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          autoComplete="off"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="confirm">Confirm Password</label>
        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          autoComplete="off"
          onChange={e => setConfirm(e.target.value)}
        />
        <button 
          disabled={!validateForm()}
          onClick={() => onClickHandler()}
          type="submit" 
        >
          Create Account 
        </button>
        </div>
      </form>

      <Footer/>
    </div>  
  );
}

export default Signup;