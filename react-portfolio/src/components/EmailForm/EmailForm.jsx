import React, { useState } from "react";
import axios from "axios";
import styles from "./Emailform.module.css";

function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus("Email Sent successfully");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className={styles.contactBtn}>
            Send Message
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}

export default EmailForm;
