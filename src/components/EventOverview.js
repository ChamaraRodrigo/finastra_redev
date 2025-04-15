import React from "react";
import PlaceImage from "./images/header2.jpg";
import { Rocket, CalendarCheck2, Globe, ShieldCheck, Zap } from "lucide-react";

function EventOverview() {
  return (
    <section id="overview" className="py-5 bg-dark text-light event-overview-section">
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
              Event <span className="text-gradient">Overview</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg image-hover-container">
              <img
                src={PlaceImage}
                alt="Banking conference"
                className="img-fluid w-100"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-7 ps-lg-5">
            <p className="lead fw-medium mb-4 animated-text animated-delay-3">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal
              Banking Forum,
              <span className="fw-semibold" style={{ color: "#7c4dff" }}>
                {" "}"Reimagine Banking: Adapt. Evolve. Thrive."
              </span>
            </p>

            <p className="mb-4 animated-text animated-delay-4">
              This exclusive event is designed to help you navigate and excel in
              the rapidly evolving banking landscape. Our forum will bring
              together business and technology experts, industry leaders, and
              visionaries to share their insights on the latest trends and
              challenges.
            </p>

            {/* Key Topics Card */}
            <div
              className="card bg-dark-subtle border-start border-4 rounded-4 p-4 mb-4 animated-text animated-delay-5"
              style={{ borderColor: "#7c4dff" }}
            >
              <h3 className="h5 fw-bold mb-4">Key Topics Include:</h3>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="topic-icon bg-gradient rounded-3 d-flex align-items-center justify-content-center">
                        <Rocket className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h6 fw-bold mb-1">Generative AI</h4>
                      <p className="small mb-0">
                        Explore AI's transformative impact on banking
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="topic-icon bg-gradient rounded-3 d-flex align-items-center justify-content-center">
                        <Globe className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h6 fw-bold mb-1">Global Markets</h4>
                      <p className="small mb-0">
                        Navigate volatility and globalization challenges
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="topic-icon bg-gradient rounded-3 d-flex align-items-center justify-content-center">
                        <ShieldCheck className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h6 fw-bold mb-1">Regulations</h4>
                      <p className="small mb-0">
                        Stay ahead of regulatory changes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="topic-icon bg-gradient rounded-3 d-flex align-items-center justify-content-center">
                        <Zap className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h6 fw-bold mb-1">Strategic Innovation</h4>
                      <p className="small mb-0">
                        Capitalize on emerging opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="fs-5 fw-medium mb-4 animated-text animated-delay-6">
              Don't miss this opportunity to enhance your knowledge, skills, and
              network in the finance and banking sector.
            </p>

            <a
              href="#register"
              className="btn btn-lg px-4 py-2 d-inline-flex align-items-center gap-2 animated-text animated-delay-7"
              style={{ background: "#7c4dff", color: "white" }}
            >
              <span>Reserve Your Spot</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventOverview;
