import React from "react";
import "../Styles/BannerSection.css"; // We'll add styles separately

export default function BannerSection() {
    return (
        <div className="hero-section">
            <div className="hero-content text-left">
                <h1>
                    Let's Help <span className="highlight">Navigate</span> Your Career
                    <br /> & Expand Your <span className="highlight">Skillset</span>
                </h1>
                <p>
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
                <button className="enquire-button">
                    Enquire <span className="arrow">➔</span>
                </button>
            </div>
            <div className="hero-overlay" />
        </div>
    );
}
