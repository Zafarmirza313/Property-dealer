import React from "react";
import value from "../Assets/value.png";
import "./Value.css"

const Value = () => {
  return (
    <section className="value" id="value">
      <div className="right-value  flexCenter" id=" manchot">
        <div className="img-container" >
          <img src={value} alt="Hero-Images" />
        </div>
      </div>

      {/* Left-Value */}

      <div className="left-value">
        <div className="our-value">
          <h1 className="">Our Values</h1>
          <br />
          <span>Values we gave to you</span>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
            provident officiis error maiores excepturi sit, repudiandae aliquam
            id nemo?
          </p>
        </div>

        {/* dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
          
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Best Rates aroound the market
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                eaque architecto similique?
              </p>
            </li>
          </ul>
        </div>
      </div>


      
      <section>
      <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Best Rates aroound the market
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                eaque architecto similique?
              </p>
            </li>
          </ul>
        </div>

      </section>
    </section>
  );
};

export default Value;
