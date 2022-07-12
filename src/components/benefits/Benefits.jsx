import React from "react";
import { CarLogo, ExclusiveDesign, HandTied } from "../../assets/svgs/logo2";
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="benefitsMain">
      <div className="benefitsContainer">
        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <CarLogo />
          </div>
          <h3>Free Delivery</h3>
          <p>On every order, during the same day</p>
        </div>

        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <ExclusiveDesign />
          </div>
          <h3>Exclusive Design</h3>
          <p>By the best Event Planner in Nigeria</p>
        </div>

        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <HandTied />
          </div>
          <h3>Hand-Tied</h3>
          <p>Bouquets and Styles</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
