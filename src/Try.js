import React from "react";
import "./index.css";
import illustrationArticle from "./illustrationArticle.svg";
import imageAvatar from "./imageAvatar.webp";
function Try() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <img src={illustrationArticle} alt="Article Illustration" />
          <div className="texts">
            <h2>Learning</h2>
            <p>Published 21 Dec 2023</p>
            <a href="#">HTML & CSS foundations</a>
            <p>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
            <div className="second-image">
              <img src={imageAvatar} alt=" Avatar of Greg Hooper" />
              <p>Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Try;
