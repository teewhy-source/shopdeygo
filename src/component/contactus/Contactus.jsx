import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contactus.styles.scss';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("myyrreze"); // Replace "myyrreze" with your Formspree form ID
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setModalVisible(true);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="contact-us-wrapper">
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
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
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
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Thank You!</h2>
            <p>Thank you for reaching out to us. We will get back to you very shortly. We love you!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
