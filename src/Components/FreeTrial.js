import React from 'react';
import './CSS/FreeTrial.css';

const FreeTrial = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello! I want to know more about the service.'; // Predefined message

  // Encode the message for URL compatibility
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="form-container">
      <div className="input-section">
        <input type="email" placeholder="Business e-mail" className="email-input" />
        <button className="Get-button">Get !</button>
      </div>
      <div className="click-to-chat-section">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="click-to-chat">
          <img
            src="https://img.icons8.com/color/48/whatsapp.png"
            alt="WhatsApp"
            className="whatsapp-icon"/>
        
          Click to chat
        </a>
      </div>
    </div>
  );
};

export default FreeTrial;
