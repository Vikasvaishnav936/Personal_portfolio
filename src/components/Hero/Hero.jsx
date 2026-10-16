import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import socialLinks from "../../data/socialLinks";
import cv from "../../assets/cv/Vikas-Vaishnav-CV.pdf";
import mascotBoy from "../../assets/images/mascot-boy1.png";

// 360 Rotation Frames
import frame01 from "../../assets/images/rotation/front.png";
// import frame08 from "../../assets/images/rotation/08-front-left.png";
// import frame09 from "../../assets/images/rotation/09-front.png";

const rotationFrames = [
  

  frame01,
  
];

function Hero({ name, experience, description }) {
  const heroRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  /*
   * ---------------------------------------------
   * SCROLL PROGRESS
   * ---------------------------------------------
   */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        if (!heroRef.current) {
          ticking = false;
          return;
        }

        const rect = heroRef.current.getBoundingClientRect();

        /*
         * Animation area.
         *
         * Hero = 180vh
         * Sticky stage = 100vh
         *
         * Isliye roughly 80vh scrolling animation ke
         * liye available rahegi.
         */

        const animationDistance =
          heroRef.current.offsetHeight - window.innerHeight;

        const currentScroll = Math.max(0, -rect.top);

        const progress =
          animationDistance > 0
            ? Math.min(
                Math.max(
                  currentScroll / animationDistance,
                  0
                ),
                1
              )
            : 0;

        setScrollProgress(progress);

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * ---------------------------------------------
   * ANIMATION PHASES
   * ---------------------------------------------
   *
   * 0.00 - 0.15
   * PORTFOLIO
   *
   * 0.15 - 0.72
   * 360 ROTATION
   *
   * 0.72 - 1.00
   * LEFT CONTENT
   */

  const introProgress = Math.min(
    scrollProgress / 0.15,
    1
  );

  const rotationProgress = Math.min(
    Math.max(
      (scrollProgress - 0.15) / 0.72,
      0
    ),
    1
  );

  const contentProgress = Math.min(
    Math.max(
      (scrollProgress - 0.70) / 0.30,
      0
    ),
    1
  );

  /*
   * ---------------------------------------------
   * CURRENT FRAME
   * ---------------------------------------------
   */

  const frameIndex = Math.min(
    Math.floor(
      rotationProgress *
        (rotationFrames.length - 1)
    ),
    rotationFrames.length - 1
  );

  /*
   * ---------------------------------------------
   * PORTFOLIO INTRO
   * ---------------------------------------------
   */

  const introStyle = {
    opacity: 1 - introProgress,

    transform: `
      scale(${1 + introProgress * 0.08})
      translateY(${-introProgress * 30}px)
    `,

    pointerEvents:
      introProgress >= 1 ? "none" : "auto",
  };

  /*
   * ---------------------------------------------
   * PROFILE
   * ---------------------------------------------
   */

  const profileStyle = {
    opacity: Math.min(
      rotationProgress * 3,
      1
    ),

    transform: `
      translateX(${(1 - rotationProgress) * 80}px)
      scale(${0.85 + rotationProgress * 0.15})
    `,
  };

  /*
   * ---------------------------------------------
   * LEFT CONTENT
   * ---------------------------------------------
   */

  const contentStyle = {
    opacity: contentProgress,

    transform: `
      translateX(${(1 - contentProgress) * -80}px)
    `,
  };

  /*
   * Individual reveal
   */

  const revealItem = (delay) => {
    const itemProgress = Math.min(
      Math.max(
        (contentProgress - delay) / 0.22,
        0
      ),
      1
    );

    return {
      opacity: itemProgress,

      transform: `
        translateY(${(1 - itemProgress) * 25}px)
      `,
    };
  };

  /*
   * ---------------------------------------------
   * MASCOT
   * ---------------------------------------------
   */


  /*
   * ---------------------------------------------
   * RENDER
   * ---------------------------------------------
   */

  return (
    <section
      className="hero"
      id="hero"
      ref={heroRef}
    >

      {/* =========================================
          PORTFOLIO INTRO
      ========================================== */}

      <div
        className="portfolio-intro"
        style={introStyle}
      >

        <div className="portfolio-intro-inner">

          <span className="portfolio-small">
            WELCOME TO MY
          </span>

          <h1>
            PORTFOLIO
          </h1>

          <div className="portfolio-scroll">
            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="scroll-arrow">
              ↓
            </span>
          </div>

        </div>

      </div>


      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="hero-animation">

        <span className="float-shape shape-one"></span>

        <span className="float-shape shape-two"></span>

        <span className="float-shape shape-three"></span>

      </div>


      {/* =========================================
          STICKY STAGE
      ========================================== */}

      <div className="hero-stage">


        {/* =======================================
            LEFT
        ======================================== */}

        <div
          className="left hero-content"
          style={contentStyle}
        >

          <p
            className="reveal-item"
            style={revealItem(0)}
          >
            👋 Hello, I'm
          </p>


          <h1
            className="hero-title reveal-item"
            style={revealItem(0.08)}
          >
            {name}
          </h1>


          <h2
            className="typing reveal-item"
            style={revealItem(0.16)}
          >

            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,

                "React Developer",
                2000,

                "Laravel Developer",
                2000,

                "WordPress Developer",
                2000,

                "PHP Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h2>


          <p
            className="desc reveal-item"
            style={revealItem(0.24)}
          >
            {description}
          </p>


          <p
            className="experience-text reveal-item"
            style={revealItem(0.32)}
          >

            <strong>
              5+
            </strong>

            {experience}

          </p>


          <div
            className="buttons reveal-item"
            style={revealItem(0.40)}
          >

            <a
              href="#contact"
              className="hire-btn"
            >
              Hire Me
            </a>


            <a
              href={cv}
              download="Vikas-Vaishnav-CV.pdf"
              className="outline"
            >
              Download CV
            </a>

          </div>


          <div
            className="social-icons reveal-item"
            style={revealItem(0.50)}
          >

            {socialLinks.map(
              (item, index) => (

                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>

              )
            )}

          </div>

        </div>


        {/* =======================================
            RIGHT
        ======================================== */}

        <div className="right profile-area">


          {/* =====================================
              360 FRAME
          ====================================== */}

          <div
            className="profile-frame-wrapper"
            style={profileStyle}
          >

            <img
              src={rotationFrames[frameIndex]}
              className="rotation-frame"
              alt="Vikas Vaishnav"
              draggable="false"
            />

          </div>


          {/* =====================================
              MASCOT
          ====================================== */}

          <div
            className="mascot"
          >

            <div className="speech-bubble">

              <strong>
                Hey! What's up? 👋
              </strong>

              <span>
                Let's start your{" "}
                <b>dream project</b>{" "}
                today! 🚀
              </span>

              <a href="#contact">
                Let's Talk →
              </a>

            </div>


            <div className="mascot-rays">

              <span></span>
              <span></span>
              <span></span>

            </div>


            <div className="mascot-boy">

              <img
                src={mascotBoy}
                alt=""
              />

            </div>


            <div className="mascot-arrow"></div>

          </div>


          {/* =====================================
              IDEA DECORATION
          ====================================== */}

          <div
            className={`idea-decoration ${
              contentProgress > 0.65
                ? "idea-visible"
                : ""
            }`}
          >

            <p>
              Turn Ideas
              <br />
              Into Reality
            </p>

            <span className="idea-underline"></span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;