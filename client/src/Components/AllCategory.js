import React from "react";
import { NavLink } from "react-router-dom";

const AllCategory = ({ category }) => {
  return (
    <>
      <div className="Category">
        <div className="container">
          {category.map((cur, index) => {
            return <NavLink to={`/category/${cur.category}`} className="glButton" key={index}>{cur.category}</NavLink>;
          })}
        </div>
      </div>
    </>
  );
};

export default AllCategory;
