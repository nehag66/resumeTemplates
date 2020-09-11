import React, { useState } from 'react';
import "./Heading.css";

const WorkHistory = (props) => {

  const [jobtitle, setJobtitle] = useState("");
  const [city, setCity] = useState(""); 
  const [state, setState] = useState("");
  const [profession, setProfession] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");

  const validateForm = () => {
    return jobtitle.length > 0 &&
        city.length > 0 &&
        state.length > 0 && 
        profession.length > 0 &&
        startDate.length > 0 &&
        endDate.length > 0
  }

  const onClickHandler = () => {
    props.history.push('/skills'); 
  }

  const onNextHandler = () => {
    props.history.push('/educationalSummary');
  }

    return (
        <div className="workHistory">
          <h2>WORK HISTORY</h2>
          <hr/>

          <label htmlFor="jobtitle">Job Title</label>
          <input
            name="jobtitle"
            type="text"
            placeholder="Enter your Job Title"
            value={jobtitle}
            autoComplete="off"
            onChange={e => setJobtitle(e.target.value)}
          /> 

          <label htmlFor="city">City</label>
          <input
            name="city"
            type="text"
            placeholder="Enter your City"
            value={city}
            autoComplete="off"
            onChange={e => setCity(e.target.value)}
          />  

          <label htmlFor="state">State</label>
          <input
            name="state"
            type="text"
            placeholder="Enter your State"
            value={state}
            autoComplete="off"
            onChange={e => setState(e.target.value)}
          />

          <label htmlFor="profession">Profession</label>
          <input
            name="profession"
            type="text"
            placeholder="Enter your Profession"
            value={profession}
            autoComplete="off"
            onChange={e => setProfession(e.target.value)}
          />

          <label htmlFor="startDate">Start date</label>
          <input
            name="startDate"
            type="date"
            placeholder="Enter your Start date"
            value={startDate}
            autoComplete="off"
            onChange={e => setStartdate(e.target.value)}
          />

          <label htmlFor="endDate">End date</label>
          <input
            name="endDate"
            type="date"
            placeholder="Enter your End date"
            value={endDate}
            autoComplete="off"
            onChange={e => setEnddate(e.target.value)}
          />    

          <p>checkbox for (currently working here).</p>
          <button onClick={onClickHandler}>BACK</button>
          <button 
            disabled={!validateForm()}
            onClick={onNextHandler}>NEXT SECTION</button>
        </div>
      );
}

export default WorkHistory;