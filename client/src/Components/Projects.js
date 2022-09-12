import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios");

const Projects = () => {
  const [data, setData] = useState([]);
  const [category, setcategory] = useState([]);

  const allTheam = async () => {
    const response = await axios.get("/findAllTheam", {
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.data.status === 401 || !response.data) {
      console.log("Error");
    } else {
      setData(response.data.theam);
      setcategory(response.data.theam);
    }
  };

  useEffect(() => {
    allTheam();
  }, []);

  const filterCard = (cur = "All") => {
    if (cur === "All") {
      setData(category);
    } else {
      const updateList = category.filter((curEle) => {
        return curEle.category === cur;
      });
      setData(updateList);
    }
  };

  const uniqueList = [
    ...new Set(
      category.map((curEle) => {
        return curEle.category;
      })
    ),
  ];

  return (
    <>
      <div className="Category">
        <div className="container">
          <button
            onClick={() => filterCard()}
            className="glButton"
          >
            All
          </button>
          {uniqueList.map((cur, index) => {
            return (
              <button
                onClick={() => filterCard(cur)}
                className="glButton"
                key={index}
              >
                {cur}
              </button>
            );
          })}
        </div>
      </div>
      <div className="projects">
        <div className="container flex wrap justContentCenter">
          {data?.map((cur, index) => (
            <div className="project" key={index}>
              <img src={`/uploads/${cur.image}`} alt="demo" />
              <h2>
                <a href={cur.liveSite}>{cur.title}</a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
