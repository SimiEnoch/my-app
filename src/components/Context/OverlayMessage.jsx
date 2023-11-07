import React from 'react';

const OverlayMessage = ({ message, onClose }) => {
  return (
    <div className="overlay-message">
      <div className="overlay-message-content">
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OverlayMessage;