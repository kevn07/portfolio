import { useEffect, useRef } from "react";
// import ScrollReveal from 'scrollreveal';
// const sr = ScrollReveal()
import ScrollReveal from 'scrollreveal'
export default function Reveal({ children }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay: 200,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor:0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      })
    }

  }, []);

  return (
    <section ref={sectionRef}>
      {children}
    </section>
  )
}