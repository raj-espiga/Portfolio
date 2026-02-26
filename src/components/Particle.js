import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Blue highlight that follows the cursor over the background grid */}
      <div
        className="particle-highlight-layer"
        style={{
          background: `radial-gradient(circle at ${cursor.x}px ${cursor.y}px,
            rgba(37, 99, 235, 0.6) 0px,
            rgba(37, 99, 235, 0.38) 40px,
            rgba(37, 99, 235, 0.22) 90px,
            rgba(37, 99, 235, 0.08) 150px,
            rgba(37, 99, 235, 0) 230px
          )`,
        }}
      />

      <Particles
        id="tsparticles"
        params={{
          particles: {
            color: {
              value: "#2563eb",
            },
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.12,
              color: "#60a5fa",
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
}

export default Particle;
