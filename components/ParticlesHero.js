import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesHero({ img, children }) {
  const particlesInit = React.useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = React.useCallback(async () => {}, []);

  return (
    <div className="flex min-w-full min-h-[100vh] flex-col justify-center">
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: `url(${img})`,
            position: "center",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 30,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 3 },
            },
          },
          move: {
            radius: 1,
          },
        }}
      />
      {children}
    </div>
  );
}
