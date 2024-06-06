import React from 'react';
import './error.styles.scss';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
