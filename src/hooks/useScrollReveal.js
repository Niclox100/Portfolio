import { useRef, useEffect } from 'react';

const useScrollReveal = (options = {
  delay,
  distance,
  duration,
  easing,
  interval,
  opacity,
  origin,
  rotate,
  scale,  
  reset,
}) => {

  const element = useRef(null);

  const defaultOptions = {
    delay: 0,
    distance: "20px",
    duration: 3000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: "top",
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 1,
    reset: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;
      ScrollReveal().reveal(element.current, mergedOptions);
    }
  }, [mergedOptions]);

  return element;
};

export default useScrollReveal;
