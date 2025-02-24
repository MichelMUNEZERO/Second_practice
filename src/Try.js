import React from "react";
import "./index.css";
function Try() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <img src="assets/images/illustration-article.svg" alt="" />
          <div className="texts">
            <h2>Learning</h2>
            <p>Published 21 Dec 2023</p>
            <a href="#">HTML & CSS foundations</a>
            <p>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
            <div className="second-image">
              <img src="assets\images\image-avatar.webp" alt="" />
              <p>Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Try;
