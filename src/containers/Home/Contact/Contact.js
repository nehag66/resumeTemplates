import React from 'react';
import './Contact.css';
import Logo from '../../../components/Logo/Logo';

import Contact from '../Contact/Contact';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Footer from '../../../components/Footer/Footer';

import {
      Route,
      NavLink
    } from "react-router-dom";

const contact = (props) => {

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
                    <Route exact path="/" component={Contact}/>
                    <Route path="/layout" component={Layout} />
                    <Route path="/about" component={About} />
                </div>

                <div align="center">
                    Let us know if you need any help!
                </div>
                <div align="center">
                    I am here to help.<br/>
                    Contact me <br/> <br/> <br/>
                </div>

                
                <div align="center">
                    CALL NOW <br/>

                    8860158898
                </div>

                <div align="center">
                    <h2>FAQ</h2>
                    <p><h2>I can’t log in to my account.</h2>   
                    Please try doing the following actions:
                    <ul>
                        <li>Try logging in with your social media account</li>
                        <li>Disable any browser extensions</li>
                        <li>Clear the cache in your browser</li>
                        <li>Refresh the page</li>
                        <li>Use the incognito/private mode to log in</li>
                    </ul>
                    If you have used Zety more than a year ago, your documents are saved on our legacy builder. <br/>
                    To access Classic Zety, please click on My Account in the top right corner and use the log in option on the left side.
                    </p>
                    <br/> <br/> <br/><br/> <br/> <br/>
                </div>

                <Footer/>
          
            </div>   
    );
   
}

export default contact;