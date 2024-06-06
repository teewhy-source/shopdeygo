import React, { useState } from 'react';
import './contactus.styles.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;
    const mailtoLink = `mailto:ediditaiye@gmail.com?subject=Contact Form Submission&body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <h1>Let's talk with us</h1>
        <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
        <div className="contact-info">
          <p>
            <span role="img" aria-label="location">📍</span> 
            No15, Tos benson, ebute,ikorodu,lagos
          </p>
          <p>
            <span role="img" aria-label="phone">📞</span> 
            +234 7013912352
          </p>
          <p>
            <span role="img" aria-label="email">✉️</span> 
            edidi.taiye@gmail.com
          </p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name*" 
            required 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name*" 
            required 
            onChange={handleChange} 
          />
        </div>
        <input 
          type="email" 
          name="email" 
          placeholder="Email*" 
          required 
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number*" 
          required 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your message..." 
          required 
          onChange={handleChange} 
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
