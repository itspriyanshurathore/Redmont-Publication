"use client";

import { cn } from "@/lib/utils";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  // White Premium Background
  const dotPatterns = {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='18' height='18' fill='none'%3E%3Ccircle fill='%23dbeafe' cx='10' cy='10' r='1.6'%3E%3C/circle%3E%3C/svg%3E")`,

    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='18' height='18' fill='none'%3E%3Ccircle fill='%23ef4444' cx='10' cy='10' r='2'%3E%3C/circle%3E%3Ccircle fill='%233b82f6' cx='22' cy='22' r='1.8'%3E%3C/circle%3E%3C/svg%3E")`,
  };

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);

    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex w-full items-center justify-center overflow-hidden bg-[#fcfcfc]",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      {/* White Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fcfcfc] to-[#f8fafc]" />

      {/* Default Dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage: dotPatterns.default,
        }}
      />

      {/* Mouse Reveal Red + Blue Dots */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-100 transition duration-300"
        style={{
          backgroundImage: dotPatterns.hover,

          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              260px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              rgba(0,0,0,0.85) 40%,
              transparent 100%
            )
          `,

          maskImage: useMotionTemplate`
            radial-gradient(
              260px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              rgba(0,0,0,0.85) 40%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Soft Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              rgba(239,68,68,0.10),
              rgba(59,130,246,0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      className={cn(
        "inline-block bg-gradient-to-r from-red-600  to-blue-600 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
