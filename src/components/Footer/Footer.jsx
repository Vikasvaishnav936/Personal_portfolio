import React from "react";
import "./Footer.css";
import {

  FaLinkedin,
 
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-whatsapp">

  <div className="footer-whatsapp-content">
    <span>HAVE AN ENQUIRY?</span>

    <h3>
      Let's discuss your <strong>next project.</strong>
    </h3>

    <p>
      Have an idea, project or collaboration in mind?
      Feel free to reach out.
    </p>
  </div>

  <a
    href="https://wa.me/919358949856?text=Hi%20Vikas,%20I%20have%20an%20enquiry%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="footer-whatsapp-btn"
  >
    <FaWhatsapp />
    <span>Let's Chat on WhatsApp</span>
    <b>→</b>
  </a>

</div>
      <div className="footer-content">
        <div className="footer-about">
          <div className="flogo">
            <span className="orange">Vikas</span>{" "}
            <span className="white2">Vaishnav</span>
          </div>

          <p>
            Full Stack Web Developer building modern, responsive and scalable
            web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>My Services</h3>

          <a href="#contact">Website Development</a>
          <a href="#contact">React Frontend</a>
          <a href="#contact">Wordpress Customization</a>
          <a href="#contact">Backend Development</a>
          <a href="#contact">Web App & Admin Panel Development</a>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>

          <div className="fsocial-icons">
            <a
              href="https://www.linkedin.com/in/vikas-vaishnav-21b98224b/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaLinkedin />
              </span>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="mailto:vaishnavvikas936@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <span>vaishnavvikas936@gmail.com</span>
            </a>

            <a href="tel:+919358949856" className="contact-item">
              <span className="contact-icon">
                <FaPhone />
              </span>
              <span>+91 93589 49856</span>
            </a>

           
          </div>
           <a href="#contact" className="stat-btn">
              Start Project <FaArrowRight />
            </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Vikas Vaishnav. All rights reserved.</p>

        <a
          href="#hero"
          className="back-to-top"
          onClick={(e) => {
            e.preventDefault();

            document.getElementById("hero").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <FaArrowUp />
        </a>
      </div>
     
    </footer>
  );
}

export default Footer;
