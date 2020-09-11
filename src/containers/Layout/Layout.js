import React from 'react';
import './Layout.css';
import Wallpaper from '../../assets/Wallpaper.jpeg';
import Logo from '../../components/Logo/Logo';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';

import {
    Route,
    NavLink
  } from "react-router-dom";

const layout = (props) => {

  const onClickHandler = () => {
    props.history.push('/login'); 
  }

  const onResumeClickHandler = () => {
    props.history.push('/main');
  }

  return (
    <div>
        <div>
          <ul className="head">
            <Logo />
            <li><NavLink to="/" replace> HOME </NavLink></li>
            <li><NavLink to="/contact" replace> CONTACT </NavLink></li>
            <li><NavLink to="/about" replace> ABOUT </NavLink></li>
            <button 
              type="submit"
              className="Button"
              onClick={(event) => onClickHandler(event)} >
              SIGN IN
            </button> 
          </ul>
          <div className="content">
            <Route exact path="/"  />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>

          <div className="Layout"> 
            <img 
              className="Wallpaper"
              src={Wallpaper} 
              alt={Wallpaper} />
            <button 
              className="Btn"
              onClick={(event) => onResumeClickHandler(event)} >CREATE MY RESUME NOW</button>    
          </div>  
          <Footer/>
        </div>  
    </div>
  );
  
}

export default layout;
