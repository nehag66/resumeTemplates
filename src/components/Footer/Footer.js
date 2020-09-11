import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p>© 2020 Printful ® Inc. All Rights reserved
                    
                <NavLink to="/contact" activeStyle={{float:"right", color: "red"}}>Contact</NavLink>
                <NavLink to="/about" activeStyle={{float:"right", color: "red"}}>About</NavLink>
                </p>
            </div>  
        </div>
    );
}

export default Footer;