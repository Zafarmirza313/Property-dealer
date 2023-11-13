import React from "react";
import hero_image from "../Assets/hero_image.png";
import location from "../Assets/location.png";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container padding innerWidth flexCenter ">
        <div className=" flexColStart hero-left" id="text">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
               Suitable <br /> Property
            </h1>
          </div>

          <div className=" flexColStart hero-desc">
            <span className="secondryText">
              Find the varity of properties that Suitable you very easlity
            </span>
            <span className="secondryText">
              Forget all the diffulties in finding the residence for You
            </span>
          </div>

          <div className="search-bar">
            <img src={location} alt="" color="var( --blue) size={25}" />
            <input type="text" />
            <button className="button">Search</button>
          </div>

        
        </div>

        <div className=" flexCenter hero-right">
          <div className="img-container">
            <img src={hero_image} alt="Hero-Images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
