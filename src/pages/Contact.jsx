import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Contact <span>Me!</span></h2>
      <div className="contact-info">
        <div className="contact-item">
          <strong>Facebook:</strong> 
          <a href="https://www.facebook.com/paul.cordova.37819" target="_blank" rel="noopener noreferrer">
          Ervin Paul Cordova 
          </a>
        </div>
        <div className="contact-item">
          <strong>Email:</strong> 
          <a>paulcord0va5667gmail.com</a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
