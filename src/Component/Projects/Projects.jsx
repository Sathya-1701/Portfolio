import React from "react";
import "./Projects.css";
import img1 from "../../assets/proj.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpeg";

const data = [
  {
    id: 2,
    image: img1,
    title: "WanderWoops-Tourism Website",

    github: "https://github.com/Sathya-1701",
  },
  {
    id: 1,
    image: img2,
    title: "Portfolio",
    github: "https://github.com/Sathya-1701/Portfolio",
  },

  {
    id: 3,
    image: img3,
    title: "SnapShare – Social Image Gallery",
    github: "https://github.com/Sathya-1701",
  },
  {
    id: 3,
    image: img4,
    title: "Blog-application-full stack ",
    github: "https://github.com/Sathya-1701",
  },
  {
    id: 3,
    image: img5,
    title: "GreenPlates-React",
    github: "https://github.com/Sathya-1701",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="project">
      <h4>Projects</h4>
      <div className="project_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item_cta">
                <a href={github} className="btn" target="_blank">
                  <button>Github</button>
                </a>
                {/*<a
                  href="https://dribble.com/Alen_pixels"
                  className="btn btn-primary"
                  target="_blank"
                >
                  <button>Live Demo</button>
                </a>*/}
              </div>
            </article>
          );
        })}
        {/* <article className="project_item">
                        <div className="project_item_image">
                          <img src={img1} alt="project1" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="project_item_cta">
                          <a href="https://github.com" className="btn" target="_blank">
                            <button>Github</button>
                          </a>
                          <a
                            href="https://dribble.com/Alen_pixels"
                            className="btn btn-primary"
                            target="_blank"
                          >
                            <button>Live Demo</button>
                          </a>
                        </div>
                            </article> printed 4 times
              */}
      </div>
    </div>
  );
};

export default Projects;
