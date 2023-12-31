import React from "react";
import logo from "../Assets/logo.png";
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src={logo} alt="logo" width={100} />
        <div className="h-menu flexCenter">
          <a href="/">Residences</a>

          <a href="/">Our Values</a>

          <a href="/">Contact Us</a>

          <a href="/">Get Started</a>


          <button className="button">
          <a href="/">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
