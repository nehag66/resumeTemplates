import React from 'react';

import Logo from '../../assets/finalLogo.png';

const logo = () => {
    return(
        <div>
        <img 
            src={Logo} 
            alt={Logo}
            className="Logo"
            align="left" />
    </div>
    );  
}

export default logo;