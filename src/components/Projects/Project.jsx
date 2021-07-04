import React from "react";
import "./Project.css";
import toDo from "./todo.PNG";
import simons from "./simons.PNG";
import notes from "./notes.PNG";
function Project() {
  return (
    <div className="project-main-div">
      <h1>PROJECTS</h1>
      <div className="project-list">
        <a href="https://nandakumar47.github.io/toDoList/">
          {" "}
          <div className="project-card">
            <img src={toDo} alt="project in a glance" />
            <h1>To Do LIST</h1>
            <p>
               A simple todo list app
            </p>
          </div>
        </a>
        <a href="https://nandakumar47.github.io/simons-game/">
        <div className="project-card">
          <img src={simons} alt="" />
          <h1>Simons Game</h1>
          <p>
          Simple game using js,html,css
          </p>
        </div>
        </a>
        <a href="https://nandakumar47.github.io/notes/">
        <div className="project-card">
          <img src={notes} alt="" />
          <h1>Notes</h1>
          <p>
          A simple notes keeping app
          </p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
