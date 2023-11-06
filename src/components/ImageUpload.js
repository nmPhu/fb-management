// src/components/ImageUpload.js
import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = () => {
    // Here you would handle the file upload to your backend or a service like AWS S3
    onUpload(image);
  };

  return (
    <div className="image-upload">
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage} className="upload-button">
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
