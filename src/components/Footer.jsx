import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ervin Paul Cordova. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
