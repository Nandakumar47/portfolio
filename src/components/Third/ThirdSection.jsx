import React from "react";
import "./ThirdSection.css";
import web from "./web-design-icon.png";
import {FaCode} from "react-icons/fa";
function ThirdSection() {
  return (
    <div className="third-div">
      <h1>WHAT I DO ?</h1>
      <div className="card-main-div">
        <div className="card-div">
          <img src={web} alt="" />
          <h1>Web Design</h1>
          <p>
            I Love To Design And Develop Static And Dynamic Responsive Websites
          </p>
        </div>
        <div className="card-div">
          <FaCode style={{fontSize:"50px"}}/>
          <h1>Coding</h1>
          <p>
            I Love To Design And Develop Static And Dynamic Responsive Websites
          </p>
        </div>
        <div className="card-div">
          <img src={web} alt="" />
          <h1>Web Development</h1>
          <p>
            I Love To Design And Develop Static And Dynamic Responsive Websites
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
