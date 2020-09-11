import React from 'react';
import './Contact.css';
import Logo from '../../components/Logo/Logo';

import Layout from '../Layout/Layout';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';

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
                    <Route exact path="/"/>
                    <Route path="/layout" component={Layout} />
                    <Route path="/about" component={About} />
                </div>

                HI THIS IS CONTACT PAGE

                <Footer/>
          
            </div>   
    );
   
}

export default contact;