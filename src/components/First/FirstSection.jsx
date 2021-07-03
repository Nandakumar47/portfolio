import React from "react";
import "./FirstSection.css";
import { Button } from "react-bootstrap";
function FirstSection() {
  return (
    <div className="name" id="home">
      <div className="home-sub">
        <div className="text-card">
          <h3>Hello! I'am</h3>
          <h1>Nandakumar P R</h1>
        </div>
        <Button variant="outline-info" href="#aboutMe">
          Know more..
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;
