import React from 'react';
import "./Heading.css";

const skills = (props) => {

  const onClickHandler = () => {
    props.history.push('/professionalSummary'); 
  }

  const onNextHandler = () => {
    props.history.push('/workHistory');
  }
    return (
        <div className="skills">
          <h2>SKILLS</h2>
          <hr/>
          <p> Project organisation, relationship development, team management, operational improvement, MS office, Process improvement, Problem resolution </p>
          <button onClick={onClickHandler}>BACK</button>
          <button 
            onClick={onNextHandler}>NEXT SECTION</button>
        </div>
      );
}

export default skills;