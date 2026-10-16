import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import laptop from "../../assets/developerdesk/laptop.png";
import keyboard from "../../assets/developerdesk/keyboard.png";
import notebook from "../../assets/developerdesk/notebook.png";
import bulb from "../../assets/developerdesk/bulb.png";
import coffee from "../../assets/developerdesk/coffee.png";

import "./DeveloperDesk.css";

gsap.registerPlugin(ScrollTrigger);

function DeveloperDesk() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ==========================================
      INITIAL STATE
      ==========================================
      */

      gsap.set(".desk-intro", {
        opacity: 1,
        y: 0,
      });

      gsap.set(".desk-laptop", {
        opacity: 0,
        y: -180,
        scale: 0.7,
        rotate: -8,
      });

      gsap.set(".desk-keyboard", {
        opacity: 0,
        y: 100,
        x: -100,
        rotate: -8,
      });

      gsap.set(".desk-notebook", {
        opacity: 0,
        x: -180,
        y: -80,
        rotate: -18,
      });

      gsap.set(".desk-bulb", {
        opacity: 0,
        y: -220,
        x: 100,
        scale: 0.5,
        rotate: 25,
      });

      gsap.set(".desk-coffee", {
        opacity: 0,
        x: 180,
        y: 100,
        rotate: 15,
        scale: 0.7,
      });

      gsap.set(".screen-content", {
        opacity: 0,
      });

      gsap.set(".screen-line", {
        opacity: 0,
        x: -20,
      });

      gsap.set(".desk-final", {
        opacity: 0,
        y: 40,
        scale: 0.8,
      });

      /*
      ==========================================
      INTRO
      ==========================================
      */

      tl.to(".desk-intro", {
        opacity: 0,
        y: -40,
        duration: 0.8,
      });

      /*
      ==========================================
      LAPTOP ENTERS
      ==========================================
      */

      tl.to(".desk-laptop", {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      /*
      ==========================================
      KEYBOARD
      ==========================================
      */

      tl.to(
        ".desk-keyboard",
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        "-=0.5"
      );

      /*
      ==========================================
      NOTEBOOK
      ==========================================
      */

      tl.to(".desk-notebook", {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: -4,
        duration: 1.2,
        ease: "power3.out",
      });

      /*
      ==========================================
      BULB
      ==========================================
      */

      tl.to(
        ".desk-bulb",
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      /*
      ==========================================
      COFFEE
      ==========================================
      */

      tl.to(".desk-coffee", {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.5)",
      });

      /*
      ==========================================
      SMALL PAUSE
      ==========================================
      */

      tl.to({}, {
        duration: 1,
      });

      /*
      ==========================================
      SCREEN TURNS ON
      ==========================================
      */

      tl.to(".screen-content", {
        opacity: 1,
        duration: 0.7,
      });

      /*
      ==========================================
      CODE LINES
      ==========================================
      */

      tl.to(
        ".screen-line",
        {
          opacity: 1,
          x: 0,
          stagger: 0.25,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      /*
      ==========================================
      CODE BUILDING
      ==========================================
      */

      tl.to(".build-status", {
        opacity: 1,
        duration: 0.5,
      });

      tl.to({}, {
        duration: 1.5,
      });

      /*
      ==========================================
      EVERYTHING GETS A LITTLE GLOW
      ==========================================
      */

      tl.to(".desk-laptop", {
        filter: "drop-shadow(0 20px 45px rgba(255,90,31,.28))",
        duration: 0.8,
      });

      tl.to(".desk-bulb", {
        filter: "drop-shadow(0 0 35px rgba(255,180,50,.65))",
        duration: 0.8,
      }, "<");

      /*
      ==========================================
      FINAL MESSAGE
      ==========================================
      */

      tl.to(".desk-final", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.5)",
      });

      /*
      HOLD FINAL
      */

      tl.to({}, {
        duration: 2,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="developer-desk"
      id="developer-desk"
      ref={sectionRef}
    >

      {/* =================================
          INTRO
      ================================= */}

      <div className="desk-intro">

        <span>THE DEVELOPER'S DESK</span>

        <h2>
          Where <strong>Ideas</strong> Become Code
        </h2>

        <p>
          Scroll to see how I turn an idea into a working digital experience.
        </p>

        <div className="scroll-hint">
          Scroll ↓
        </div>

      </div>


      {/* =================================
          DESK SCENE
      ================================= */}

      <div className="desk-scene">

        {/* Ambient glow */}

        <div className="desk-glow"></div>


        {/* Back decoration */}

        <div className="desk-wall-glow"></div>


        {/* =================================
            NOTEBOOK
        ================================= */}

        <img
          src={notebook}
          alt="Notebook"
          className="desk-object desk-notebook"
        />


        {/* =================================
            BULB
        ================================= */}

        <img
          src={bulb}
          alt="Idea bulb"
          className="desk-object desk-bulb"
        />


        {/* =================================
            LAPTOP
        ================================= */}

        <div className="laptop-wrapper">

          <img
            src={laptop}
            alt="Developer laptop"
            className="desk-object desk-laptop"
          />

          {/* Laptop screen content */}

          <div className="screen-content">

            <div className="code-window">

              <div className="code-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-body">

                <div className="screen-line">
                  <i>const</i> idea = "your vision";
                </div>

                <div className="screen-line">
                  <i>const</i> design = createUI(idea);
                </div>

                <div className="screen-line">
                  <i>const</i> code = build(design);
                </div>

                <div className="screen-line">
                  launch(code);
                </div>

                <div className="build-status">
                  ✓ PROJECT READY
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            KEYBOARD
        ================================= */}

        <img
          src={keyboard}
          alt="Keyboard"
          className="desk-object desk-keyboard"
        />


        {/* =================================
            COFFEE
        ================================= */}

        <img
          src={coffee}
          alt="Coffee"
          className="desk-object desk-coffee"
        />


        {/* =================================
            FINAL TEXT
        ================================= */}

        <div className="desk-final">

         

          <h3>
            Let's build something
            <strong> great.</strong>
          </h3>

          <a href="tel:09358949856">
            Start Your Project
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default DeveloperDesk;