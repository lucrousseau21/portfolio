// "use client";
// import { useEffect, useRef } from "react";
// import Lenis from "lenis";

// function SmoothScroll({ children }) {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,
//       duration: 1.5,
//       smoothTouch: true,
//     });

//     lenisRef.current = lenis;

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return <div ref={lenisRef}>{children}</div>;
// }

// export default SmoothScroll;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      y: -100,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

export default SmoothScroll;