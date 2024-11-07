import React from "react";
import "./About.css";
import porfile_img from "../../assets/profile_img.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={porfile_img} alt="" className="about-profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an beginner Frontend Developer with basic experience of Html,
              Css, Js and React Js
            </p>
            <p>
              I am an beginner Frontend Developer with basic experience of Html,
              Css, Js and React Js
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js </p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Year of experience</p>
        </div>
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
