// src/components/ImageDisplay.jsx
import React from 'react';

const ImagenDisplay = ({ src, alt }) => {
  if (!src) return null; // No renderiza nada si no hay imagen

  return (
    <div className="imagen-container">
      <img src={src} alt={alt} className="imagen" />
    </div>
  );
};

export default ImagenDisplay;