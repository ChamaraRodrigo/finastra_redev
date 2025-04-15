import React, { useEffect, useRef } from 'react';
import './css/About.css';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="about-finastra-container fade-in">
      <h1 className="about-title slide-in-top">About Finastra</h1>
      <p className="about-text fade-in-delay">Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.</p>
      <p className="about-link fade-in-delay-2">For more information, visit <a href="https://www.finastra.com" target="_blank" rel="noopener noreferrer">www.finastra.com</a>.</p>
    </div>
  );
}

export default About;
