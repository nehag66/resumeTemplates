import React from 'react';
import './About.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

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
                <Route exact path="/"/>
                <Route path="/layout" component={Layout} />
                <Route path="/contact" component={Contact} />
            </div>
            
            HI THIS IS ABOUT PAGE

            <Footer/>
          
        </div>
    );  
}

export default about;



