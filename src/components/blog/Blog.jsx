import React from "react";
import blogImage1 from "../../assets/svgs/blogImage1.svg";
import { Logo2 } from "../../assets/svgs/logo2";
import "./blog.scss";

export const Blog = () => {
  return (
    <div className="blogMain">
      <div className="blogMainTop">
        <h1>Articles from the Blog</h1>
        <h3>Blog</h3>
        <Logo2 />
      </div>

      <div className="blogMainWrapper">
        <img src={blogImage1} alt="blogImages" />
        <h4>October, 2022</h4> {/* optimize the code for date */}
        <p>An occassion that joins two hearts in a symphony</p>
        <div className="blogMainComments">
          <h5>By Sarah Daniel</h5>
          <span>|</span>
          <h5>2 Comments</h5>
        </div>
      </div>
    </div>
  );
};
