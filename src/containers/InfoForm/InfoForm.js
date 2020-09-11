import React from 'react';
import './InfoForm.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import ProfessionalSummary from './PersonalInfo/ProfessionalSummary';
import Skills from './PersonalInfo/Skills';
import WorkHistory from './PersonalInfo/WorkHistory';
import Heading from './PersonalInfo/Heading';
import EducationalSummary from './PersonalInfo/EducationSummary';
import Languages from './PersonalInfo/Languages';

const infoForm = (props) => {

  const onClickHandler = () => {
    props.history.push('/'); 
  }
    
    return (
        <HashRouter>
        <div className="InfoForm">
          <ul className="header">
            <li><NavLink to="/heading" replace>Heading</NavLink></li>
            <li><NavLink to="/professionalSummary" replace>Professional Summary</NavLink></li>
            <li><NavLink to="/skills" replace>Skills</NavLink></li>
            <li><NavLink to="/workHistory" replace>Work History</NavLink></li>
            <li><NavLink to="/educationalSummary" replace>Educational Summary</NavLink></li>
            <li><NavLink to="/languages" replace>Languages</NavLink></li>
            <button>DOWNLOAD RESUME</button>
            <button onClick={onClickHandler}>LOGOUT</button>
          </ul>
          <div className="content">
            <Route exact path="/" component={Heading} />
            <Route path="/heading" component={Heading} />
            <Route path="/professionalSummary" component={ProfessionalSummary} />
            <Route path="/skills" component={Skills} />
            <Route path="/workHistory" component={WorkHistory} />
            <Route path="/educationalSummary" component={EducationalSummary} />
            <Route path="/languages" component={Languages} />
          </div>
        </div>
        </HashRouter>
    ); 
}

export default infoForm;