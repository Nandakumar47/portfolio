import React, { useEffect, useState } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  const [state, setState] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (show) {
        setState(true);
      } else {
        setState(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    console.log(state);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [state]);
  return (
    <div className="header">
      <Navbar className={state ? "navbar2" : "navbar1"} expand="lg">
        <Navbar.Brand href="#home">Nandakumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-auto navLinks" variant="light">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
