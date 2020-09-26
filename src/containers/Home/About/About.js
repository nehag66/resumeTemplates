import React from 'react';
import './About.css';
import Logo from '../../../components/Logo/Logo';
import Footer from '../../../components/Footer/Footer';
import AboutPic from '../../../assets/Aboutpage.jpg'

import About from '../About/About';
import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact';

import {
      Route,
      NavLink
    } from "react-router-dom";

const about = (props) => {

    const onClickHandler = () => {
        props.history.push('/login'); 
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
                    onClick={(event) => onClickHandler(event)} >
                    SIGN IN
                </button> 
            </ul>
            <div className="content">
                <Route exact path="/" component={About}/>
                <Route path="/layout" component={Layout} />
                <Route path="/contact" component={Contact} />
            </div>
            
            <div className="Blue" align="center">
                <h1>About us</h1>
                <h2>My Resume is a career site made and brought up by Neha Goel. </h2>    
            </div>
            <div align="center">
            <h1>My Resume to the rescue</h1>
                <h4>Its objective is to allow many people to create resume for themselves and help them to achieve their dream job. 
                    It is available free of cost. It has attractive templates for resume making.</h4>
            </div>

            <img 
              className="About"
              src={AboutPic} 
              alt={About}/>
            <br/><br/>  

            <div align="center">
                My Resume will help many job seekers find employment. 
            </div>  
              <br/><br/><br/><br/><br/><br/><br/><br/>

            <Footer/> 
        </div>
    );  
}

export default about;



