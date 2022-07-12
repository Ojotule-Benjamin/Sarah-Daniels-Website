import React from "react";
import inspirationImage from "../../assets/svgs/inspirationImage.svg";
import "./inspiration.scss";

export const Inspiration = () => {
  return (
    <div className="inspirationMain">
      <div className="inspirationMainLeft">
        <img src={inspirationImage} alt="mediaImages" />
      </div>
      <div className="inspirationMainRight">
        <h1>Media</h1>
        <h3>
          You need inspiration?{" "}
          <span>Then explore our exclusive media page</span>
        </h3>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button>Gallery</button>
      </div>
    </div>
  );
};
