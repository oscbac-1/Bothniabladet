import React, { useState } from 'react';

function ImageUpload() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleSaveImage() {
    console.log('Description:', description);
    console.log('Image:', image);
    // Add code here to save the image and description
  }

  return (
    <div>
      <div>
        <label htmlFor="imageInput">Choose an image:</label>
        <input type="file" id="imageInput" onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="descriptionInput">Description:</label>
        <input type="text" id="descriptionInput" value={description} onChange={handleDescriptionChange} />
      </div>
      <button onClick={handleSaveImage}>Save Image</button>
    </div>
  );
}

export default ImageUpload;