import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      margin: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}>
              <section style={{ width: '100%', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Contact Us</h2>
                  <p style={{ marginBottom: '20px', color: '#666' }}>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: '1 1 48%' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }}
                        placeholder="Your name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: '1 1 48%' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }}
                        placeholder="Your email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: '1 1 48%' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px' }}
                        placeholder="+91 879487xxxx"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: '1 1 100%' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '150px' }}
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#007BFF',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      marginTop: '20px'
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </section>
            </div>
          </div>
          <div className="col-xl-6">
            <div style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119942.83792747592!2d73.7060171433594!3d20.041490400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea68870d56c7%3A0xdcdd72fe89fc2e94!2sMET%20Bhujbal%20Knowledge%20City!5e0!3m2!1sen!2sin!4v1718206545947!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: '0', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
