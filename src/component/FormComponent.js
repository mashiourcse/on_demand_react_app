import React, { useState } from 'react';

const FormComponent = ({ addInputToList }) => {
  const [inputValue, setInputValue] = useState('');
  
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      addInputToList(inputValue);
      setInputValue('');
    }
  };

  

  return (
    <div>
        {
            isFormVisible ? <button onClick={toggleFormVisibility}>
            {isFormVisible ? 'Hide Form' : null}
          </button> : null
        }
      
      <p></p>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
