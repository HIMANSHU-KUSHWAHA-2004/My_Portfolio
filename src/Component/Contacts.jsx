import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o7omgpf", "template_7u4ncna", form.current, "0higmyl2XsXEJkV9q")
      .then(
        () => {
          alert("Message sent successfully.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-label">
            <span className="contact-icon">Phone</span>
            <div className="contact-text">
              <strong>Call</strong>
              <span>+91 8510099623</span>
            </div>
          </div>

          <div className="contact-label">
            <span className="contact-icon">Mail</span>
            <div className="contact-text">
              <strong>Email</strong>
              <span>hk5652990@gmail.com</span>
            </div>
          </div>

          <div className="contact-label">
            <span className="contact-icon">City</span>
            <div className="contact-text">
              <strong>Location</strong>
              <span>Faridabad, Haryana, India</span>
            </div>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
