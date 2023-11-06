// src/components/FacebookPostPreview.js
import React from 'react';
import './FacebookPostPreview.css'; // We will create this CSS file next

const FacebookPostPreview = ({ primaryText, linkTitle, linkDescription, imageUrl }) => {
  return (
    <div className="facebook-post-preview">
      {imageUrl && <img src={imageUrl} alt="Post visual" className="post-image" />}
      <div className="post-content">
        <p className="primary-text">{primaryText}</p>
        <p className="link-title">{linkTitle}</p>
        <p className="link-description">{linkDescription}</p>
      </div>
    </div>
  );
};

export default FacebookPostPreview;
