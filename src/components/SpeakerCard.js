import React from "react";
import "./css/SpeakerCard.css";
import { Linkedin, Twitter, TwitterX } from "react-bootstrap-icons";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${speaker.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="card-body">
        <div className="speaker-content">
          <div className="category">{speaker.company || "Guest Speaker"}</div>
          <div className="heading">
            {speaker.name}
            {speaker.title && (
              <div className="author">
                <span className="name">{speaker.title}</span>
              </div>
            )}
          </div>
        </div>

        <div className="speaker-actions">
          <a className="register-button" href="#Sessions">
            <span className="register-text">View Sessions</span>
          </a>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button className="btn-social">
              <Linkedin />
            </button>
            <button className="btn-social">
              <TwitterX />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
