import React, { useState } from 'react';

const TitleComponent = () => {
  const [inputValue, setInputValue] = useState('');
  
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
     
      //setInputValue('');
      setIsFormVisible(!isFormVisible);
    }
  };

  

  return (
    <div>
      <h2>{inputValue}</h2>
      <p></p>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Add Title</button>
        </form>
      )}
    </div>
  );
};

export default TitleComponent;
