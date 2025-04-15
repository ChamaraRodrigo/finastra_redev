import React, { useEffect, useRef } from "react";
import PlaceImage from "./images/header2.jpg";
import { Rocket, CalendarCheck2, Globe, ShieldCheck, Zap } from "lucide-react";

function EventOverview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
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
    <section 
      id="overview" 
      className="py-5 bg-dark text-light event-overview-section fade-up" 
      ref={sectionRef}
    >
      <div className="container py-4">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <span
              className="text-uppercase fw-500 letter-spacing-3 d-block mb-2 animated-text animated-delay-1"
              style={{ color: "#7c4dff" }}
            >
              About the Event
            </span>
            <h2 className="display-4 fw-bold animated-text animated-delay-2">
              Event <span className="text-gradient hover-glow">Overview</span>
            </h2>
            <div className="header-underline animated-text animated-delay-2"></div>
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg image-hover-container animated-text animated-delay-3">
              <img
                src={PlaceImage}
                alt="Banking conference"
                className="img-fluid w-100 hover-zoom"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
              <div className="image-border-animation"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-7 ps-lg-5">
            <p className="lead fw-medium mb-4 animated-text animated-delay-4">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal
              Banking Forum,
              <span className="fw-semibold text-gradient" style={{ color: "#7c4dff" }}>
                {" "}"Reimagine Banking: Adapt. Evolve. Thrive."
              </span>
            </p>

            <p className="mb-4 animated-text animated-delay-5">
              This exclusive event is designed to help you navigate and excel in
              the rapidly evolving banking landscape. Our forum will bring
              together business and technology experts, industry leaders, and
              visionaries to share their insights on the latest trends and
              challenges.
            </p>

            {/* Key Topics Card */}
            <div
              className="card bg-dark-subtle border-start border-4 rounded-4 p-4 mb-4 animated-text animated-delay-6 hover-float"
              style={{ borderColor: "#7c4dff" }}
            >
              <h3 className="h5 fw-bold mb-4">Key Topics Include:</h3>

              <div className="row g-4">
                {[
                  { icon: <Rocket size={20} className="text-white" />, title: "Generative AI", text: "Explore AI's transformative impact on banking" },
                  { icon: <Globe size={20} className="text-white" />, title: "Global Markets", text: "Navigate volatility and globalization challenges" },
                  { icon: <ShieldCheck size={20} className="text-white" />, title: "Regulations", text: "Stay ahead of regulatory changes" },
                  { icon: <Zap size={20} className="text-white" />, title: "Strategic Innovation", text: "Capitalize on emerging opportunities" }
                ].map(({ icon, title, text }, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="d-flex topic-item">
                      <div className="flex-shrink-0">
                        <div className="topic-icon bg-gradient rounded-3 d-flex align-items-center justify-content-center hover-pulse">
                          {icon}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h6 fw-bold mb-1 hover-glow">{title}</h4>
                        <p className="small mb-0">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="fs-5 fw-medium mb-4 animated-text animated-delay-7">
              Don't miss this opportunity to enhance your knowledge, skills, and
              network in the finance and banking sector.
            </p>

            <a
              href="#register"
              className="btn btn-lg px-4 py-2 d-inline-flex align-items-center gap-2 animated-text animated-delay-8 btn-primary hover-grow"
            >
              <span>Reserve Your Spot</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventOverview;