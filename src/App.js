import React, { useState } from 'react';
import FormComponent from './component/FormComponent';
import ListComponent from './component/ListComponent';
import ProfilePictureUpload from './component/ProfilePictureUpload';
import './App.css'; // Import your CSS file
import TitleComponent from './component/TitleComponent';

const App = () => {
  const [inputList, setInputList] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const addInputToList = (input) => {
    setInputList([...inputList, input]);
  };

  const handlePictureUpload = (file) => {
    setSelectedPicture(file);
  };

  return (
    <div className="container">
      {selectedPicture && (
        <img
          className="profile-pic"
          src={URL.createObjectURL(selectedPicture)}
          alt="Profile"
        />
      )}
      
      <ProfilePictureUpload onPictureUpload={handlePictureUpload} />
      <TitleComponent />
      <FormComponent addInputToList={addInputToList} selectedPicture={selectedPicture} />
      <ListComponent inputs={inputList} />
    </div>
  );
};

export default App;
