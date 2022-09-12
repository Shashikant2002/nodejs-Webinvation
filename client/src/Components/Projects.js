import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllCategory from "./AllCategory";
const axios = require("axios");

const Projects = () => {
  const [data, setData] = useState([]);

  const allTheam = async () => {
    const response = await axios.get("/findAllTheam", {
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.data.status === 401 || !response.data) {
      console.log("Error");
    } else {
      console.log("Done");
      setData(response.data.theam);
    }
  };

  console.log(data);
  useEffect(() => {
    allTheam();
  }, []);

  const uniqueList = [
    ...new Set(
      data.map((curEle) => {
        return curEle.category;
      })
    ),
  ];

  return (
    <>
    <AllCategory category={data} />
      <div className="projects">
        <div className="container flex wrap justContentCenter">
          {data?.map((cur, index) => (
            <div className="project" key={index}>
              <img src={`/uploads/${cur.image}`} alt="demo" />
              <h2>
                <a href={cur.liveSite}>{cur?.title}</a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
