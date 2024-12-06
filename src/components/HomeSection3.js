import React from "react";
import "./CSS/HomeSection3.css"; // Combined CSS for both components
import hotel from '../Assets/hotel.webp';
import tour from '../Assets/tour.webp';
import transport from '../Assets/transport.webp';
import swim from '../Assets/swim.webp';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import img4 from '../Assets/img4.webp';
import img5 from '../Assets/img5.webp';
import img6 from '../Assets/img6.webp';

const HomePage = () => {
  const services = [
    {
      id: 1,
      name: "Stay Package",
      description: "Relax and unwind with our curated stay packages.",
      image: hotel,
    },
    {
      id: 2,
      name: "Guided Tours",
      description: "Experience the best attractions with expert guides.",
      image: tour,
    },
    {
      id: 3,
      name: "Transportation",
      description: "Hassle-free transport options for your convenience.",
      image: transport,
    },
    {
      id: 4,
      name: "Adventure Activities",
      description: "Exciting adventures to make your trip unforgettable.",
      image: swim,
    },
  ];

  return (
    <div className="homepage-container">
      {/* HomeSection3 */}
      <div className="tourism-container">
        <div className="left-section">
          <h3 className="heading">Why Choose Us</h3>
          <p className="description">
            Discover why we are the best choice for your travel needs. With
            top-notch services and customer satisfaction as our priority, your journey is in good hands.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <h4 className="service-name">{service.name}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <img src={img6} alt="Tourism" className="tourism-image" />
        </div>
      </div>

      {/* Home */}
      <div className="container">
        <div className="top-section">
          <div className="image-section">
            <img src={img1} alt="Modern Bedroom Design" className="image1" />
            <img src={img2} alt="Modern Bedroom Design" className="image2" />
          </div>
          <div className="text-section">
            <h2>We Help You Explore the World</h2>
            <p>
              Embark on unforgettable journeys with our expert travel services. 
              Whether you're seeking serene landscapes, cultural landmarks, or thrilling adventures, 
              we ensure your travel experience is seamless and memorable.
            </p>
            <ul>
              <li>
                <strong>Personalized Itineraries:</strong> Tailored travel plans to match your preferences.
              </li>
              <li>
                <strong>World-Class Hospitality:</strong> Experience comfort and luxury at every step.
              </li>
              <li>
                <strong>Exclusive Deals:</strong> Enjoy great savings on premium packages.
              </li>
            </ul>
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
