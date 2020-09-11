import React, { useState } from "react";
import "./Heading.css";

import axios from '../../../axios';

const Heading = (props) => {
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [city, setCity] = useState(""); 
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const validateForm = () => {
        return name.length > 0 &&
            profession.length > 0 &&
            city.length > 0 && 
            state.length > 0 &&
            pincode.length === 6 &&
            phone.length === 10 &&
            email.length > 0
    }

        const onSaveHandler = () => {

            alert("Your information is saved. Thanks for trusting us");

            const heading = {
                name: name,
                profession: profession,
                city: city,
                state: state,
                pincode: pincode,
                phone: phone,
                email: email
            }

            axios.post('/personalInfo.json', heading)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }
    
        const onNextHandler = () => {
            props.history.push('/professionalSummary');
        }

    return (
        <div className="head">
            <h2>HEADING</h2>
            <hr/>
            <label htmlFor="name">Full Name</label>
            <input
                name="name"
                type="text"
                placeholder="Enter your Full Name"
                value={name}
                autoComplete="off"
                onChange={e => setName(e.target.value)}
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

            <label htmlFor="pincode">Pincode</label>
            <input
                name="pincode"
                type="text"
                placeholder="Enter your Pincode"
                value={pincode}
                autoComplete="off"
                onChange={e => setPincode(e.target.value)}
            />  

            <label htmlFor="phone">Phone</label>
            <input
                name="phone"
                type="text"
                placeholder="Enter your Phone"
                value={phone}
                autoComplete="off"
                onChange={e => setPhone(e.target.value)}
            />  

            <label htmlFor="email">Email</label>
            <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
            />

            <button
                disabled={!validateForm()}
                onClick={onNextHandler}>
                NEXT SECTION
            </button>
            <button
                disabled={!validateForm()}
                onClick={onSaveHandler}>
                SAVE 
            </button>
        </div>
    );
}

export default Heading;