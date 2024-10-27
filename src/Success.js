import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success-container">
      <h2>Form Submitted Successfully!</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Success;
