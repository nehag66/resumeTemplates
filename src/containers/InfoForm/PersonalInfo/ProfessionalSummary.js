import React, { useState } from 'react';
import "./Heading.css";
import axios from '../../../axios';

const ProfessionalSummary = (props) => {

  const [professionalSummary, setProfessionalsummary] = useState("");

  const validateForm = () => {
    return professionalSummary.length > 0 
  }

  const onClickHandler = () => {
    props.history.push('/heading'); 
  }

  const onNextHandler = () => {
    props.history.push('/skills');
  }

  const onSaveHandler = () => {

    alert("Your information is saved. Thanks for trusting us");

    const profSum = {
      professionalSummary: professionalSummary
    }

    axios.post('/personalInfo.json', profSum)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}

  
    return (
        <div className="professional">
          <h2>PROFESSIONAL SUMMARY</h2>
          <hr/>
          <input 
            type="textarea" 
            name="textValue"
            autoComplete="off"
            onChange={e => setProfessionalsummary(e.target.value)}
          />
          <button onClick={onClickHandler}>BACK</button>
          <button 
            disabled={!validateForm()}
            onClick={onNextHandler}>NEXT SECTION</button>
          <button
            disabled={!validateForm()}
            onClick={onSaveHandler}>
            SAVE 
        </button>   
        </div>
    );
}

export default ProfessionalSummary;