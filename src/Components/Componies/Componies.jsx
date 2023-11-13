import React from "react";
import tower from "../Assets/tower.png";
import prologis from "../Assets/prologis.png";
import equinix from "../Assets/equinix.png";
import realty from "../Assets/realty.png";
import "./Componies.css";

const Componies = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={tower} alt="" />
        <img src={prologis} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </div>
  );
};

export default Componies;
