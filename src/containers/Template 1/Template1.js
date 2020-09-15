import React from 'react';
import './Template1.css';

const Template1 = () => {
    return (
        <div className="a">
            <h2>Ashish Goel</h2>
            <div className="b">
                <p>Designer</p>
                <p>London, UK</p>
                <p>janedoe@mail.com</p>
                <p>1224435534</p>
                <hr/>

                <p><b>Skills</b></p>
                <p>Adobe Photoshop</p>
                <div>90%
                </div>
                <p>Photography</p>
                <div>80%
                </div>
                <p>Illustrator</p>
                <div>75%
                </div>
                <p>Media</p>
                <div>50%
                </div>
                <br/>

                <p><b>Languages</b></p>
                <p>English</p>
                <p>Hindi</p>
                <br/>
                <br/>
            </div>    
            
                <div className="basicInfo">
                    <div>
                    <h2>Work Experience</h2>
                        <div>
                        <h5><b>Front End Developer / w3schools.com</b></h5>
                        <h6>Jan 2015 - <span>Current</span></h6>
                        <p> I work as a front end developer. I use react. </p>
                        <hr/>
                        </div>
                        <div>
                        <h5><b>Web Developer / something.com</b></h5>
                        <h6>Mar 2012 - Dec 2014</h6>
                        <p>I worked as web developer. </p>
                        <hr/>
                        </div>
                        <div>
                        <h5><b>Graphic Designer / designsomething.com</b></h5>
                        <h6>Jun 2010 - Mar 2012</h6>
                        <p>I worked as graphics designer </p><br/>
                        </div>
                    </div>

                    <div>
                    <h2>Education</h2>
                        <div>
                        <h5><b>W3Schools.com</b></h5>
                        <h6>Forever</h6>
                        <p>Web Development! All I need to know in one place</p>
                        <hr/>
                        </div>
                        <div>
                        <h5><b>London Business School</b></h5>
                        <h6>2013 - 2015</h6>
                        <p>Master Degree</p>
                        <hr/>
                        </div>
                        <div>
                        <h5><b>School of Coding</b></h5>
                        <h6>2010 - 2013</h6>
                        <p>Bachelor Degree</p><br/>
                        </div>
                    </div>
                </div>
        </div>    
    );
}    

export default Template1;