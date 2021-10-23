import React from "react";

import { DOMAIN_NAME } from "../config";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__form-box">
        <form
          action="https://formsubmit.co/iamian3102@gmail.com"
          method="POST"
          className="contact__form"
        >
          <h2 className="heading-secondary mb-medium">Contact</h2>
          <div className="contact__input-box">
            <input
              type="text"
              className="contact__input"
              id="name"
              placeholder="Full Name"
              name="name"
              required
            />
            <label htmlFor="name" className="contact__label">
              Full Name
            </label>
          </div>
          <div className="contact__input-box">
            <input
              type="email"
              className="contact__input"
              id="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <label htmlFor="email" className="contact__label">
              Email Address
            </label>
          </div>
          <div className="contact__input-box">
            <textarea
              className="contact__input contact__input--textarea"
              id="message"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <label htmlFor="message" className="contact__label">
              Your Message
            </label>
          </div>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Important! New submission!"
          />
          <input type="hidden" name="_next" value={`${DOMAIN_NAME}/thanks`} />
          <div className="contact__input-box">
            <button className="btn btn--inline">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
