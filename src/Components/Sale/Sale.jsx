import React from "react";
import "./Sale.css";
import r1 from "../Assets/r1.png";
import r2 from "../Assets/r2.png";
import r3 from "../Assets/r3.png";
const Sale = () => {
  return (
    <section className="sale">
      <h1 className="flexCenter">Best Choices</h1>
      <h2 className="flexCenter"> Popular Residences</h2>
      <div className="sale-houses" >
        <div className="div">
          <img src={r1} alt="" />
          <div className="details">
            <span id="price">$39,000</span>
            <br />
            <span className="location">Nalatar</span>
            <p className=" para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              rem temporibus a?
            </p>
          </div>
        </div>

        <div className="div ">
          <img src={r2} alt="" />
          <div className="details">
            <span id="price">$29,999</span>
            <br />
            <span className="location">Gilgit City</span>
            <p className=" para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              rem temporibus a?
            </p>
          </div>
        </div>
        <div className="div">
          <img src={r3}  alt=""/>
          <div className="details">
            <span id="price">$59,000</span>
            <br />
            <span className="location">Islamabad</span>
            <p className=" para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              rem temporibus a?
            </p>
          </div>
        </div>
        <div className="div">
          <img src={r2} alt=""/>
          <div className="details">
            <span id="price">$89,999</span>
            <br />
            <span className="location">Karachi</span>
            <p className=" para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              rem temporibus a?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
