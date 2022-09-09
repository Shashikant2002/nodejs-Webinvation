import React from "react";
import sampleData from "./sampleData";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container flex wrap justContentCenter">
        {sampleData?.map((cur, index) => (
          <div className="project" key={index}>
            <img src={cur.image} alt="demo" />
            <h2>
              <a href={cur.path}>{cur?.title}</a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
