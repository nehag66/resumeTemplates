import React from 'react';
import './Template.css';
import Logo from '../../components/Logo/Logo';
import Auth from '../Auth/Auth';
import '../Home/Layout/Layout.css';

import Contact from '../Home/Contact/Contact';
import About from '../Home/About/About';
import Footer from '../../components/Footer/Footer';

import {
    Route,
    NavLink
  } from "react-router-dom";

const template = (props) => {   

    const onLogoutHandler = () => {
        Auth.signout();
        props.history.push('/'); 
    }
    const onClickHandler = () => {
        //console.log("INFO button was clicked");
        props.history.push('/infoForm');
    }

    const onUse1Handler = () => {
        props.history.push('/template1');
    }

    const onUse2Handler = () => {
        props.history.push('/template2');
    }

    const onUse3Handler = () => {
        props.history.push('/template3');
    }

    const onUse4Handler = () => {
        props.history.push('/template4');
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
                    onClick={(event) => onLogoutHandler(event)} >
                    LOGOUT
                </button>
                <button
                    onClick={(event)=> onClickHandler(event)}>
                    PERSONAL INFORMATION
                </button>
            </ul>
            <div className="content">
                <Route exact path="/"  />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </div>  
             
            <div className="Main">
                RESUME TEMPLATES
            </div>
            <div className="Templates">
                <div className="Template1">
                    <button onClick={onUse1Handler}>USE</button>
                </div>  
                <div className="Template2">
                    <button onClick={onUse2Handler}>USE</button>
                </div>
                <div className="Template3">
                    <button onClick={onUse3Handler}>USE</button>
                </div>
                <div className="Template4">
                    <button onClick={onUse4Handler}>USE</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default template;