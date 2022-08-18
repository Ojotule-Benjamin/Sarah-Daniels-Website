import React from "react";
import aboutUsImage from "../../assets/svgs/aboutUsImage.svg";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div
        className="aboutUsMain"
        style={{
          backgroundImage: `url(${aboutUsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="aboutUsItems">
          <h1>ABOUT US</h1>
          <h2>We plan and Design Weddings That Capture the Imagination!!! </h2>
          <p>
            Wedding are significant in people lives and as such, couples are
            often willing to spend considerable amount of money to ensure that
            their wedding are well-organized. Wedding planners are often used by
            couples who work long hours and have little spare time available for
            sourcing and managing wedding venues
          </p>
          <button>
            <span>MORE ABOUT US</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
