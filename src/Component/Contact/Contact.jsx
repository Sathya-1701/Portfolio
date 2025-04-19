import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

emailjs.init("W6wu3K-lca-mvi3co");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q456sct", "template_ccp00rs", form.current)
    .then(
      () => {
        console.log("SUCCESS!");
        alert("Message sent successfully ✅");

      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Failed to send message ❌");
      }
    );
};

  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am actively pursuing opportunities to launch my career in the IT
            industry and welcome job-related inquiries or potential
            collaborations; please feel free to contact me directly.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sathyaomkumar@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-6380926230</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Coonoor,India</p>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="contact-right"
        >
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write message here</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submite">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
