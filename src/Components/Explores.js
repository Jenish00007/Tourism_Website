import React from "react";
import "./CSS/Explore.css";

import MountainImage from "../Assets/Mountain.jpg";
import BeachImage from "../Assets/beach.jpg";
import IslandImage from "../Assets/island.jpg";
import SunsetImage from "../Assets/sunset.jpg";
import HeroImage from "../Assets/hero.jpg"; // Background image for Hero Section

const Explore = () => {
  return (
    <div className="explore-page">
      {/* Hero Section */}
      <header
        className="explore-section"
        style={{
          backgroundImage: `url(${HeroImage})`, // Set background image
          backgroundSize: "cover", // Ensures the image covers the section
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
          height: "70vh", // Adjust height as needed
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff", // Ensure text is visible
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div className="explore-content">
          <h1 className="explore-title">Explore</h1>
          <p className="explore-subtitle">
            Discover breathtaking destinations and plan your perfect trip.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Enter destination..." />
            <button>Search</button>
          </div>
        </div>
      </header>

      {/* Explore Grid */}
      <section className="explore-grid">
        <div className="grid-item">
          <img src={MountainImage} alt="Mountain" className="grid-image" />
          <h3 className="grid-title">Mountains</h3>
        </div>
        <div className="grid-item">
          <img src={BeachImage} alt="Beach" className="grid-image" />
          <h3 className="grid-title">Beach</h3>
        </div>
        <div className="grid-item">
          <img src={IslandImage} alt="island" className="grid-image" />
          <h3 className="grid-title">Island</h3>
        </div>
        <div className="grid-item">
          <img src={SunsetImage} alt="sunset" className="grid-image" />
          <h3 className="grid-title">Sunset</h3>
        </div>
      </section>
    </div>
  );
};

export default Explore;
