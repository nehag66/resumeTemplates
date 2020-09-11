import React from 'react';
import "./Heading.css";

const languages = (props) => {

  const onClickHandler = () => {
    props.history.push('/educationalSummary'); 
  }

  // const onSaveHandler = () => {

  //   alert("Your information is saved. Thanks for trusting us");

  //   const education = {
  //     schoolName: schoolName,
  //     schoolLocation: schoolLocation,
  //     degree: degree,
  //     fieldOfStudy: fieldOfStudy,
  //     gradStartDate: gradStartDate,
  //     gradEndDate: gradEndDate
  //   }

  //   axios.post('/personalInfo.json', education)
  //       .then(response => console.log(response.data))
  //       .catch(error => console.log(error));
  // }

    return (
        <div className="languages">
          <h2>Languages</h2>
          <hr/>
          <p> Button to add a language here</p>
          <button onClick={onClickHandler}>BACK</button>
          {/* <button
          disabled={!validateForm()}
          onClick={onSaveHandler}>
          SAVE 
        </button>  */}
        </div>
      );
}

export default languages;