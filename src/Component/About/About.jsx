import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src="/image/profile.jpg" alt="Sathya's profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
            I am a motivated and results-driven Full Stack Python Developer with a passion for creating dynamic and user-centric web applications. I have experience working with both frontend and backend technologies, using frameworks like Django.
            </p>
            <p>
              I have completed my Bachelor's Degree of {" "}
              <strong> Computer Applications (BCA)</strong> at Providence College for Women, Coonoor(Aug 2021 – Jun 2024)
            </p>

            <p>
            I am currently completing a Full Stack Python course at Appin Technology, where I have honed my skills in HTML, CSS, Bootstrap, JavaScript, React.js, Python, Django, and SQL. Through hands-on projects and practical learning, I have developed a comprehensive understanding of both front-end and back-end development, equipping me to design and build dynamic, scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
