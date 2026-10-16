import React, { useState } from "react";
import "./Navbar.css";
import { FaPaperPlane } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <span className="white">Vikas</span>{" "}
        <span className="blue">Vaishnav</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
         
      </div>
 <a href="#contact" className="nav-btn">
                      Lets Talk <FaPaperPlane />
                    </a>
    </nav>
  );
}

export default Navbar;