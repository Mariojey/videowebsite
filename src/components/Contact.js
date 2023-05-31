import React, { useState } from "react";
import './Contact.css';
const FORM_ENDPOINT = ""; // TODO - fill on the later step

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contactContainer" id="contact">
        <h4>Contact Us</h4>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required className="inputContact"/>
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required className="inputContact"/>
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required className="textareaContact"/>
      </div>
      <div>
        <button type="button" className="btnContact"> Send a message </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;