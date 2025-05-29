import React from "react";
import "./Hero.css";
import cv from "../../assets/RESUME.pdf";

const Hero = () => {
  return (
    <div id="home">
      <div className="hero">
        <div className="hero-content">
          <h1>
            I'm Sathya, a passionate <span>Full Stack Developer</span>
          </h1>
          <p>
            I build responsive web apps using
            <strong> React, HTML, CSS,JavaScript,Python and Django </strong>.
            I'm always eager to learn and grow in the tech world.
          </p>
          <div className="hero-buttons">
            {/* <div className="hero-connect">Connect with me</div> */}
            <div class="home-icons">
              <a href="https://github.com/Sathya-1701" id="Github">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.instagram.com/sathya.mrp3" id="insta">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/sathya-m1701/" id="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="hero-resume">
              <a href={cv} download>
                My resume{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="profile">
          <img
            className="profile-img"
            src="./image/profile1.JPG"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
