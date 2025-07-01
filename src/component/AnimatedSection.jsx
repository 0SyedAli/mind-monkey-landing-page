"use client"
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable Animated Section Component
const AnimatedSection = ({ children, direction = "left", zoom = "none", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const animationVariants = {
    hidden: {
      opacity: 0,
      // Directional movement based on direction prop
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      scale: zoom === "in" ? 0.8 : zoom === "out" ? 1.2 : 1, // Apply zoom-in or zoom-out
    },
    visible: {
      opacity: 1,
      x: 0, // Reset x position when visible
      y: 0, // Reset y position when visible
      scale: 1, // Reset zoom to normal size
      transition: { duration: 1, delay: delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;