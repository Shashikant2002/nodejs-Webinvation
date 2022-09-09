import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container flex justSpaceBetween alinItemCenter">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "assets/img/logo.png"} alt="" />
          </div>
          <div className="getInTouch">
            <a href="/">Get In Touch</a>
          </div>
        </div>
      </div>
      <div className="description textAlign">
        <h1>OUR PROJECT</h1>
        <p>
          At Weeb Innovations, we firmly believe, trust comes up from successful
          shows. <br />
          Thereby, we’ve got you here!
        </p>
      </div>
      <div className="businessCatecory textAlign">
        <input type="text" placeholder="business category" />
        <button>Search</button>
      </div>
    </>
  );
};

export default Header;
