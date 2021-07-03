import React from "react";
import "./SecondSection.css";
import icon from "./Nandakumar.jpeg";
import {
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
function SecondSection() {
  return (
    <div className="second-div" id="aboutMe">
      <div className="card-outer-div">
        <div className="card-first-half">
          <div className="top-half">
            <div className="image">
              {" "}
              <img src={icon} alt="Avatar" />
            </div>

            <div className="details">
              <p>
                <span>Name: </span>Nandakumar P R
              </p>
              <p>
                <span>E-mail: </span>nandakumarpr046@gmail.com
              </p>
              <p>
                <span>Phone: </span>+91-8086558072
              </p>
            </div>
          </div>
          <div className="bottom-half">
            <p>Skill's</p>
            <div className="icons">
              <div>
                <FaHtml5 />
                <p>Html</p>
              </div>
              <div>
                <FaCss3Alt />
                <p>CSS</p>
              </div>
              <div>
                <FaJs />
                <p>JavaScript</p>
              </div>
              <div>
                <FaNode />
                <p>NodeJS</p>
              </div>
              <div>
                <FaReact />
                <p>ReactJS</p>
              </div>
              <div>
                <FaPython />
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-second-half">
          <h1>About me</h1>
          <hr />
          <h2>Hi I'am Nandakumar P R</h2>
          <h4>Web Developer</h4>
          <p>
            I Was Always Fascinated By The Technicalities With Which Websites
            Were Designed. So Started My Journey By Making A Personal Website
            For My Self.
          </p>
          <p>
            I Would Like To Be Part Of OpenSource Projects And Make
            Contributions Of My Own
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
