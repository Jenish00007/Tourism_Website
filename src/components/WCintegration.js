import React from 'react';
import './CSS/WCintegration.css';
import wicon from '../Assets/wicon.webp'
import cicon from '../Assets/cicon.webp'

    
  export function handleWhatsAppMessage(actionType) {
    // Base URL for WhatsApp API
    const baseWhatsappUrl = "https://api.whatsapp.com/send?phone=+123456789";

      if (actionType === "default") {
      // Default message for WhatsApp icon
      const message = "Hello! I have a general inquiry.";
      window.open(`${baseWhatsappUrl}&text=${encodeURIComponent(message)}`, "_blank");
      } else if (actionType === "bookNow") {
      // Message for "Book Now" action
      const message = "Hello! I would like to book a service.";
      window.open(`${baseWhatsappUrl}&text=${encodeURIComponent(message)}`, "_blank");
      } else {
      console.error("Invalid action type passed to handleWhatsappMessage");
      }
    }

const WCintegration = () => {
  // wcintegration.js
  const handleCall = () => {
    const phoneNumber = "1234567890"; // Replace with actual number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="interaction-container">
      <button className="call-button" onClick={handleCall}>
      <img src={cicon}  alt="Tour image" />
      </button>
      <button className="whatsapp-button" onClick={() => handleWhatsAppMessage("default")}>
      <img src={wicon}  alt="Tour image" />
      </button>
    </div>
  );
};

export default WCintegration;
