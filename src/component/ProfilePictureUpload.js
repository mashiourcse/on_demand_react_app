import React, { useState } from 'react';

const ProfilePictureUpload = ({ onPictureUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onPictureUpload(file);
    setIsFormVisible(!isFormVisible);
  };

  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className=" profile-picture-upload">
      
      {isFormVisible ? <input
        type="file"
        id="profile-picture"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
      /> : null}
      
      {/* {selectedFile && <p>Selected: {selectedFile.name}</p>} */}
      <p></p>
      <h1 ><b>Dr. Ali Hasan</b></h1>
    </div>
  );
};

export default ProfilePictureUpload;
