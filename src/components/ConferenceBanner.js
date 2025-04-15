import React, { useEffect, useRef } from "react";
import "./css/ConferenceBanner.css";
import watchImg from "./images/watch.jpg"; 

const ConferenceBanner = () => {
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }
    
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div className="conference-wrapper">
      <div ref={bannerRef} className="conference-container fade-in">
        <div className="conference-image zoom-in">
          <img
            src={watchImg} 
            alt="Checking time"
            className="img-fluid"
          />
        </div>

        <div className="conference-text">
          <h2 className="conference-heading slide-in-bottom">
            TOP REASONS WHY THIS IS THE ONLY <br />
            CONFERENCE YOU NEED TO ATTEND IN 2025
          </h2>
          <ul className="conference-list">
            <li className="fade-in-list"><strong>💡 Learn from industry experts</strong></li>
            <li className="fade-in-list"><strong>📈 Stay ahead of emerging trends</strong></li>
            <li className="fade-in-list"><strong>👥 Connect with fellow banking professionals</strong></li>
            <li className="fade-in-list"><strong>🎓 Enhance your knowledge, skills, and network</strong></li>
            <li className="fade-in-list"><strong>💬 Share your expertise and experience with peers</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
