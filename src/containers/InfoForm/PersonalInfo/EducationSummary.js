import React, { useState } from 'react';
import "./Heading.css";

import axios from '../../../axios';

const EducationalSummary = (props) => {

  const [schoolName, setSchoolname] = useState("");
  const [schoolLocation, setSchoollocation] = useState(""); 
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldofstudy] = useState("");
  const [gradStartDate, setGradstartdate] = useState("");
  const [gradEndDate, setGradenddate] = useState("");

  const validateForm = () => {
    return schoolName.length > 0 &&
        schoolLocation.length > 0 &&
        degree.length > 0 && 
        fieldOfStudy.length > 0 &&
        gradStartDate.length > 0 &&
        gradEndDate.length > 0 
  }

  const onClickHandler = () => {
    props.history.push('/workHistory'); 
  }

  const onNextHandler = () => {
    props.history.push('/languages');
  }

  const onSaveHandler = () => {

    alert("Your information is saved. Thanks for trusting us");

    const education = {
      schoolName: schoolName,
      schoolLocation: schoolLocation,
      degree: degree,
      fieldOfStudy: fieldOfStudy,
      gradStartDate: gradStartDate,
      gradEndDate: gradEndDate
    }

    axios.post('/personalInfo.json', education)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}

    return (
      <div className="educational">
        <h2>EDUCATIONAL SUMMARY</h2>
        <hr/>

        <label htmlFor="schoolName">School Name</label>
          <input
            name="schoolName"
            type="text"
            placeholder="Enter your School Name"
            value={schoolName}
            autoComplete="off"
            onChange={e => setSchoolname(e.target.value)}
          /> 

          <label htmlFor="schoolLocation">School Location</label>
          <input
            name="schoolLocation"
            type="text"
            placeholder="Enter your School Location"
            value={schoolLocation}
            autoComplete="off"
            onChange={e => setSchoollocation(e.target.value)}
          />  

          <label htmlFor="degree">Degree</label>
          <input
            name="degree"
            type="text"
            placeholder="Enter your Degree"
            value={degree}
            autoComplete="off"
            onChange={e => setDegree(e.target.value)}
          />

          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            name="fieldOfStudy"
            type="text"
            placeholder="Enter your Field of Study"
            value={fieldOfStudy}
            autoComplete="off"
            onChange={e => setFieldofstudy(e.target.value)}
          />

          <label htmlFor="gradStartDate">Graduation Start date</label>
          <input
            name="gradStartDate"
            type="date"
            placeholder="Enter your Graduation Start date"
            value={gradStartDate}
            autoComplete="off"
            onChange={e => setGradstartdate(e.target.value)}
          />

          <label htmlFor="gradEndDate">Graduation End date</label>
          <input
            name="gradEndDate"
            type="date"
            placeholder="Enter your Graduation End date"
            value={gradEndDate}
            autoComplete="off"
            onChange={e => setGradenddate(e.target.value)}
          /> 

        <p> checkbox for (currently attend here).</p>
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

export default EducationalSummary;