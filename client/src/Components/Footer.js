import React from "react";
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="rides">
                <p>@2022 Weeb Innovation. All rights reserved. <a href="/">Privacy Policy</a></p>
            </div>
            <div className="socalMedia">
                <span><FaFacebookF/></span>
                <span><FaFacebookF/></span>
                <span><FaFacebookF/></span>
                <span><FaFacebookF/></span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
