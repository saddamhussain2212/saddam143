// src/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      navigate('/success');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Password validation: minimum 8 characters
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    return errors;
  };

  return (
    <div
      className="form-container"
      style={{
        backgroundImage: `url('https://www.pixelstalk.net/wp-content/uploads/2015/12/Desktop-Backgrounds-Download-Free.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="string"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
           <label htmlFor="name">Last Name</label>
          <input
            type="string"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
