import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './CSS/Section1.css';
import image1 from '../Assets/fur2.webp';  // Adjust the path as needed
import image2 from '../Assets/fur4.jpg';
import image3 from '../Assets/fur3.webp';

function Section1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Track if scrolling is in progress
  const scrollContainerRef = useRef(null);
  const images = [image1, image2, image3];

  // Handle scroll to update active index
  const handleScroll = () => {
    if (isScrolling) return; // Prevent scroll handler during active scrolling
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const sectionWidth = scrollContainerRef.current.offsetWidth;
    const newIndex = Math.floor(scrollLeft / sectionWidth);
    setActiveIndex(newIndex);
  };

  // Scroll to a specific section when a dot is clicked
  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth',
      });
      setIsScrolling(true);
    }
  };

  // Set up interval to automatically switch between images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length; // Loop back to first after last
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            left: nextIndex * scrollContainerRef.current.offsetWidth,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsScrolling(false); // Set scrolling state back to false after the scroll is completed
    };

    // Add event listeners only if the ref is valid
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('transitionend', handleTransitionEnd);

      // Cleanup event listeners on component unmount
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [isScrolling]);

  return (
    <section className="hero-section">
      <div className="scroll-container" ref={scrollContainerRef}>
        {/* Map over images array */}
        {images.map((image, index) => (
          <div className="hero-content" key={index}>
            <div className="hero-text">
              <h1>Explore the World with Us</h1>
              <p>Discover amazing places and unique experiences.</p>
              
              {/* Link to /book page */}
              <Link to="/book">
                <button className="start-button">Start Your Journey</button>
              </Link>
            </div>
            
            <div className="hero-image">
              <img src={image} alt={`Explore the world ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className={`dots ${isScrolling ? 'hide' : ''}`}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          >
          </span>
        ))}
      </div>
    </section>
  );
}

export default Section1;
