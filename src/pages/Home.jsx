import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-container">
        <h2 className="home-title">Hi, I'm <span className="highlight">Ervin Paul Cordova </span></h2>
          <h3 className="home-subtitle"><span className="highlight">2nd year BSIT student</span></h3>
          <p className="home-description">
          I live in San Isidro Jaro,Iloilo City.
          and I love exploring the world of programming and innotave  tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;