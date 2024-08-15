import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name,
      email_id: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_ghcxbi6',         // Replace with your EmailJS service ID
      'template_kw1j05c',        // Replace with your EmailJS template ID
      emailData,                 // Pass the data object with correct keys
      '2w2bRba441fAt68ig'        // Replace with your EmailJS user ID (Public key)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      
      // Trigger SweetAlert on success
      Swal.fire({
        title: 'Success!',
        text: 'Your Email has been sent',
        icon: 'success',
        background: '#161513',  // black background
        color: '#ff7f00',    // orange text
        confirmButtonColor: '#ff7f00',  // orange button
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('Something went wrong. Please try again later.');
    });
  };

  return (
    <div>
      <h2 className='contact text-center'>
        Wanna? <span style={{ color: '#ff7f00' }}>Work Together</span>
      </h2>
      <div className="container cont">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {!isSubmitted ? (
              <form className="mb-5" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name" className="col-form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message" className="col-form-label">Message</label>
                    <textarea style={{ height: "150px" }} className="form-control" name="message" id="message" cols="30" rows="7" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input style={{ backgroundColor: "#ff7f00", color: "#fcf5f5", fontWeight: 500 }} type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4 bt" />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
            ) : (
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            )}
            {error && <div id="form-message-warning">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
