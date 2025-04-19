import React from "react";
import './Skills.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="skill">
      <h1>Skills</h1>

      <div className="container skill_container">
        <div className="skill_frontend">
          <h2>Frontend Development</h2>
          <div className="skill_content">
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>HTML</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>CSS</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>Bootstrap</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>JavaScript</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>React</h3>
            </article>
          </div>
        </div>
        <div className="skill_backend">
          <h2>Backend Development</h2>
          <div className="skill_content">
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>Python</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>Django</h3>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill  className="icon"/>
              <h3>Sqlite</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
