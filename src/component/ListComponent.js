import React from 'react';

const ListComponent = ({ inputs }) => {
  return (
    <ul>
      {inputs.map((input, index) => (
        <li key={index}>
          {index + 1}. {input}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
