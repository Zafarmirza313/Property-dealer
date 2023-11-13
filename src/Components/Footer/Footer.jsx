import React from "react";
import "./Footer.css";
import logo2 from "../Assets/logo2.png";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container padding innerWidth flexCenter">
        {/* left Side */}
        <div className="f-left ">
          <img src={logo2} width={120} alt="" />
          <div className="secondaryText">
            <span>
              Our Vision is to make all people <br />
              the best price to live for them
            </span>
          </div>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            145 Gilgit,Jutial Near Z-S Plaza
          </span>

          <div className="f-menu flexCenter">
            <h5>About</h5>
            <h5>Contact</h5>
            <h5>Services</h5>
            <h5>Trust</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
