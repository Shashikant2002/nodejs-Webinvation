import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios");

const ShowProduct = () => {
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
      setData(response.data.theam);
    }
  };

  useEffect(() => {
    allTheam();
  }, []);

  const deleteProduct = async (id) => {
    console.log(id);
    const response = await axios.get(`/deleteTheam/${id}`, {
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.data.status === 401 || !response.data) {
      console.log("Error");
    } else {
      alert("Theam Deleted");
    }
  };

  return (
    <>
      {/* All Data Here  */}

      <div className="showData">
        <div className="container">
          <div className="heading">
            <div className="attribute">
              <h3>SNo.</h3>
            </div>
            <div className="attribute">
              <h3>Title</h3>
            </div>
            <div className="attribute">
              <h3>Live Link</h3>
            </div>
            <div className="attribute">
              <h3>Image</h3>
            </div>
            <div className="attribute">
              <h3>Category</h3>
            </div>
            <div className="attribute">
              <h3>Delete</h3>
            </div>
          </div>

          {data.map((cur, index) => {
            return (
              <div key={index} className="Parts heading">
                <div className="attribute">
                  <p>{index}</p>
                </div>
                <div className="attribute">
                  <p>{cur.title}</p>
                </div>
                <div className="attribute">
                  <a href={cur.liveSite}>{cur.liveSite}</a>
                </div>
                <div className="attribute">
                    <img src={`/uploads/${cur.image}`} alt="demo" />
                </div>
                <div className="attribute">
                  <p>{cur.category}</p>
                </div>
                <div className="attribute">
                  <button
                    onClick={() => deleteProduct(cur._id)}
                    className="glButton red"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
