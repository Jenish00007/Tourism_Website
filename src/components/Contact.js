
const Contact = () => {
    return (
      <>
      <h1>This page for Contact</h1>
      </>
    )
  };
<<<<<<< Updated upstream
  
  export default Contact;
=======

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };


  return (
    <div className="container">
      {/* Left Side - Description and Contact Details */}
      <div className="left">
        <h2 className="header">Welcome to Our Contact Page</h2>
        <h3 className="subHeader">Connecting with Us is Simple</h3>
        <p className="description">
          We’re here to help you with any inquiries or support you may need. Reach out to us for the best services and accommodations.
        </p>

        <div className="contactInfo">
          <p><span className="icon">📍</span> <strong>Location:</strong> 123 Main Street, Anytown, USA</p>
          <p><span className="icon">✉️</span><strong>Email:</strong>  contact@example.com</p>
          <p><span className="icon">📞</span><strong>Phone:</strong>  (123) 456-7890</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="right">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label">
            Mobile Number:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label">
            Number of Persons:
            <input
              type="number"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label">
            Check-In Date:
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label">
            Check-Out Date:
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
>>>>>>> Stashed changes
