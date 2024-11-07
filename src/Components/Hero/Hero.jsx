import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" className="profile_img" />
      <h1><span className="hero-span">I'm Dinesh Khadkd</span> <br></br> frontend developer </h1>
      <p>I am a fronted developer </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume </div>
      </div>
    </div>
  );
};

export default Hero;
