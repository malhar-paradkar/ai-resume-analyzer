import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.7 },
          color: { value: "#6366F1" },
          links: {
            enable: true,
            distance: 120,
            color: "#6366F1",
            opacity: 0.2,
            width: 1,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;