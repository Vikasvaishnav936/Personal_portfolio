import "./Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import phoneImage from "../../assets/images/telephone.png";
function Contact() {

  const [phoneReady, setPhoneReady] = useState(false);
  const [boyReady, setBoyReady] = useState(false);

  const [ringing, setRinging] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");


  /*
  ==========================================
  CONTACT SCENE START
  ==========================================
  */

  React.useEffect(() => {

    // Smoke starts immediately

    const phoneTimer = setTimeout(() => {
      setPhoneReady(true);
    }, 1200);

    const boyTimer = setTimeout(() => {
      setBoyReady(true);
    }, 1900);

    return () => {
      clearTimeout(phoneTimer);
      clearTimeout(boyTimer);
    };

  }, []);


  /*
  ==========================================
  CLICK TELEPHONE
  ==========================================
  */

  const handleContactClick = () => {

    if (ringing || showContact) return;

    setRinging(true);

    /*
      Phone rings for around 2.5 seconds
    */

    setTimeout(() => {

      setRinging(false);
      setShowContact(true);

    }, 2800);
  };


  /*
  ==========================================
  FORM CHANGE
  ==========================================
  */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  /*
  ==========================================
  EMAILJS
  ==========================================
  */

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {

      setStatus("Please fill in all fields.");

      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_dd2jr8k",
        "template_fxx9fmi",
        formData,
        "nC1qJPD0j5j6UT1On"
      )
      .then(() => {

        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      })
      .catch((error) => {

        console.error(error);

        setStatus(
          "Something went wrong. Please try again."
        );

      });

  };


  return (

    <section className="contact" id="contact">

      {!showContact ? (

        /*
        ==========================================
        PHONE SCENE
        ==========================================
        */

        <div
          className={`contact-scene ${
            ringing ? "is-ringing" : ""
          }`}
        >

          {/* Heading */}

          <div className="contact-heading">

            <span>GET IN TOUCH</span>

            <h2>Let's Work Together</h2>

            <p>
              Have a project in mind? Let's discuss how I can help.
            </p>

          </div>


          {/* Main cinematic scene */}

         <div className="phone-stage">

  {/* =================================
      TELEPHONE
  ================================= */}

  {phoneReady && (

    <div
      className={`telephone-wrapper ${
        ringing ? "is-ringing" : ""
      }`}
      onClick={handleContactClick}
    >

      {!ringing ? (

        /* ===============================
           NORMAL TELEPHONE
        =============================== */

        <div className="normal-telephone">

          <img
            src={phoneImage}
            alt="Vintage telephone"
            className="telephone-image"
          />

        </div>

      ) : (

        /* ===============================
           RINGING TELEPHONE
        =============================== */

        <div className="ringing-telephone">

          {/* Phone BODY - same image */}

          <img
            src={phoneImage}
            alt=""
            className="ringing-phone-body"
          />


          {/* RECEIVER - same image,
              cropped from the same PNG */}

          <div className="receiver-layer">

            <img
              src={phoneImage}
              alt=""
              className="receiver-image"
            />

          </div>


          {/* Ring waves */}

          <span className="ring-wave ring-wave-left"></span>

          <span className="ring-wave ring-wave-right"></span>


          {/* Incoming call indicator */}

          <div className="incoming-call">

            <div className="incoming-phone-icon">
              ☎
            </div>

            <div className="incoming-call-text">

              <strong>
                Incoming Call
              </strong>

              <span>
                Connecting...
              </span>

            </div>

          </div>

        </div>

      )}

    </div>

  )}


  {/* =================================
      SPEECH BUBBLE
  ================================= */}

  {boyReady && !ringing && (

    <div className="contact-character">

      <div className="speech-bubble">

        <strong>
          Hey!
        </strong>

        <span>
          Click the phone<br />
          to contact me
        </span>

      </div>

    </div>

  )}


  {/* =================================
      CLICK TEXT
  ================================= */}

  {!ringing && phoneReady && (

    <div className="click-indicator">

      <span className="click-dot"></span>

      Click the telephone

    </div>

  )}

</div>
        </div>

      ) : (

        /*
        ==========================================
        CONTACT FORM REVEAL
        ==========================================
        */

        <div className="contact-reveal">

          <div className="contact-heading">

            <span>CONNECTION ESTABLISHED</span>

            <h2>Let's Work Together</h2>

            <p>
              Thanks for reaching out. Let's discuss your project.
            </p>

          </div>


          <div className="contact-content">


            {/* =========================
                CONTACT DETAILS
            ========================== */}

            <div className="contact-info">

              <h3>Let's Talk</h3>

              <p>
                I'm available for freelance projects,
                full-time opportunities and interesting
                collaborations.
              </p>


              <div className="contact-detail">

                <h4>Email</h4>

                <p>
                  vaishnavvikas936@gmail.com
                </p>

              </div>


              <div className="contact-detail">

                <h4>Phone</h4>

                <p>
                  +91 9358949856
                </p>

              </div>


              <div className="contact-detail">

                <h4>Location</h4>

                <p>
                  Udaipur, Rajasthan, India
                </p>

              </div>

            </div>


            {/* =========================
                FORM
            ========================== */}

            <div className="contact-form-wrapper">

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />


                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />


                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />


                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                />


                <button type="submit">
                  Send Message
                </button>


                {status && (

                  <p className="form-status">
                    {status}
                  </p>

                )}

              </form>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Contact;