"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
        },
      },
      color: {
        value: isDark ? ["#00d4ff", "#a855f7", "#06ffd0"] : ["#2563eb", "#7c3aed", "#0d9488"],
      },
      links: {
        enable: true,
        color: isDark ? "#1a1a2e" : "#cbd5e1",
        distance: 150,
        opacity: isDark ? 0.3 : 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none" as const,
        random: true,
        straight: false,
        outModes: {
          default: "bounce" as const,
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      shape: {
        type: "circle",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={options}
    />
  );
}
