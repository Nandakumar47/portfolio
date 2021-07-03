import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="footer-main-div">
        <h2>Get in touch..</h2>
        <hr className="under_line" />
        <Button href="/contact">Contact me</Button>
        <div className="socialMedia">
          <FaLinkedin style={{color:"#0077b5"}}/>
          <FaInstagram style={{color:"#cd486b"}}/>
          <FaTwitter style={{color:"#1DA1F2"}}/>
        </div>
        <p>Copyright @2021</p>
      </div>
    </footer>
  );
}

export default Footer;
