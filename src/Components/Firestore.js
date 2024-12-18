import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { email, message },
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
        },
        (error) => {
          console.log("Email sending failed", error);
        }
      );

    // Store email data in Firestore
    try {
      await addDoc(collection(db, "emails"), {
        email,
        message,
        timestamp: new Date(),
      });
      console.log("Email data saved to Firestore!");
    } catch (error) {
      console.error("Error saving email data: ", error);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default App;
