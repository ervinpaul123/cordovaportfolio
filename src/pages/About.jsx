import React from "react";
import "../styles/About.css";
import profileImage from "../images/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
      <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
          Hello! I’m Ervin Paul Cordova IT student with a passion for technology, problem-solving, and innovation. I enjoy learning about software development .
You sent
In my free time, I like exploring new programming languages
You sent
 My goal is to develop solutions that make a real impact and continuously improve my skills in the ever-evolving field of IT.
          </p>
        </div>
</div> 
    </section>
  );
};

export default About;
