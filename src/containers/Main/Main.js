import React from 'react';
import './Main.css';
import Logo from '../../components/Logo/Logo';

import '../Home/Layout/Layout.css';

import Contact from '../Home/Contact/Contact';
import About from '../Home/About/About';
import Footer from '../../components/Footer/Footer';

import {
    Route,
    NavLink
  } from "react-router-dom";

const main = (props) => {   

    const onSigninHandler = () => {
        props.history.push('/login'); 
      }

    const onUse1Handler = () => {
        alert("LOGIN TO CONTINUE");
    }

    const onUse2Handler = () => {
        alert("LOGIN TO CONTINUE");
    }

    const onUse3Handler = () => {
        alert("LOGIN TO CONTINUE");
    }

    const onUse4Handler = () => {
        alert("LOGIN TO CONTINUE");
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
            
            <div className="Main">
                RESUME TEMPLATES
            </div>
            <div className="Templates">
                <div className="Template1">
                    <button onClick={onUse1Handler}>USE</button>
                    {/* <Template1/> */}
                </div>  
                <div className="Template2">
                    <button onClick={onUse2Handler}>USE</button>
                    {/* TEMPLATE 2 */}
                </div>
                <div className="Template3">
                    <button onClick={onUse3Handler}>USE</button>
                    {/* TEMPLATE 3 */}
                </div>
                <div className="Template4">
                    <button onClick={onUse4Handler}>USE</button>
                    {/* TEMPLATE 4 */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default main;