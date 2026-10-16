import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaRocket,
  
} from "react-icons/fa";

import "./DeveloperJourney.css";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    number: "01",
    icon: <FaLightbulb />,
    title: "Discover",
    subtitle: "Understanding the idea",
    description:
      "Every great website starts with understanding the business, audience and goals behind the idea.",
    tags: ["Research", "Planning", "UI/UX"],
  },
  {
    number: "02",
    icon: <FaPaintBrush />,
    title: "Design",
    subtitle: "Turning ideas into experiences",
    description:
      "I create clean, responsive and user-focused interfaces that look great across every screen.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Develop",
    subtitle: "Building the experience",
    description:
      "Frontend, backend, APIs and databases come together to turn the design into a real working product.",
    tags: ["React", "Laravel", "PHP", "MySQL"],
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Launch",
    subtitle: "Ready for the real world",
    description:
      "After testing, optimization and final polishing, the project is ready to go live.",
    tags: ["Testing", "SEO", "Deployment"],
  },
];

function DeveloperJourney() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const progressRef = useRef(null);
  const activeNumberRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const dots = dotsRef.current;

      // Initial state
      gsap.set(cards, {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -120 : 120),
        scale: 0.92,
      });

      gsap.set(dots, {
        scale: 0.7,
        opacity: 0.35,
      });

      gsap.set(progressRef.current, {
        height: "0%",
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Section screen ke top par pin hogi
          start: "top top",

          // 4 cards ke liye plenty of scroll
          end: "+=6500",

          scrub: 1.2,
          pin: true,
          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
      ============================================
      INTRO
      ============================================
      */

      tl.fromTo(
        ".journey-heading",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      /*
      ============================================
      EACH STEP
      ============================================
      */

      cards.forEach((card, index) => {
        const dot = dots[index];

        /*
        Card enters
        */
        tl.to(card, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        });

        /*
        Active dot
        */
        tl.to(
          dot,
          {
            scale: 1.18,
            opacity: 1,
            backgroundColor: "#ff5a1f",
            color: "#ffffff",
            boxShadow: "0 0 0 10px rgba(255,90,31,.12)",
            duration: 0.5,
          },
          "<"
        );

        /*
        Update center number
        */
        tl.call(
          () => {
            if (activeNumberRef.current) {
              activeNumberRef.current.textContent =
                journeyData[index].number;
            }
          },
          null,
          "<"
        );

        /*
        Progress line
        */
        tl.to(
          progressRef.current,
          {
            height: `${((index + 1) / journeyData.length) * 100}%`,
            duration: 1,
            ease: "none",
          },
          "<"
        );

        /*
        Animate tags
        */
        tl.from(
          card.querySelectorAll(".journey-tag"),
          {
            opacity: 0,
            y: 15,
            stagger: 0.12,
            duration: 0.5,
            ease: "power2.out",
          },
          "+=0.15"
        );

        /*
        IMPORTANT:
        Card yaha kaafi time stay karega.
        Isi wajah se user content properly padh sakega.
        */
        tl.to(
          {},
          {
            duration: 2.8,
          }
        );

        /*
        Previous dot normal
        */
        if (index < cards.length - 1) {
          tl.to(
            dot,
            {
              scale: 0.9,
              opacity: 0.45,
              backgroundColor: "#ffffff",
              color: "#ff5a1f",
              boxShadow: "none",
              duration: 0.4,
            }
          );
        }
      });

      /*
      ============================================
      FINAL CTA
      ============================================
      */

      tl.to(
        ".journey-center",
        {
          scale: 1.15,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
        },
        "-=0.2"
      );

      /*
      CTA ko bhi screen par thoda hold
      */
      tl.to(
        {},
        {
          duration: 1.5,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journey-section" id="journey" ref={sectionRef}>

      {/* =========================
          HEADING
      ========================= */}

      <div className="journey-heading">
        <span className="journey-label">MY PROCESS</span>

        <h2>
          From Idea <span>to Reality</span>
        </h2>

        <p>
          A simple process I follow to turn ideas into powerful
          digital experiences.
        </p>
      </div>


      {/* =========================
          MAIN JOURNEY AREA
      ========================= */}

      <div className="journey-stage">

        {/* Background glow */}
        <div className="journey-glow"></div>


        {/* =========================
            CENTER TIMELINE
        ========================= */}

        <div className="journey-timeline">

          <div className="timeline-base"></div>

          <div
            className="timeline-progress"
            ref={progressRef}
          ></div>

          {journeyData.map((item, index) => (
            <div
              key={item.number}
              className="timeline-dot"
              ref={(el) => (dotsRef.current[index] = el)}
            >
              {item.number}
            </div>
          ))}

          {/* Center BUILD circle */}

          

        </div>


        {/* =========================
            CARDS
        ========================= */}

        <div className="journey-cards">

          {journeyData.map((item, index) => (
            <article
              className={`journey-card ${
                index % 2 === 0 ? "card-left" : "card-right"
              }`}
              key={item.number}
              ref={(el) => (cardsRef.current[index] = el)}
            >

              <div className="card-top">

                <div className="journey-icon">
                  {item.icon}
                </div>

                <span className="card-number">
                  {item.number}
                </span>

              </div>


              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>


              <div className="journey-tags">

                {item.tags.map((tag) => (
                  <span className="journey-tag" key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            FINAL CTA
        ========================= */}

       
      </div>

    </section>
  );
}

export default DeveloperJourney;