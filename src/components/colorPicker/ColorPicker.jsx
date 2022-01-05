import React from 'react';

import './ColorPicker.css';


const ColorPicker = ({ colors }) => {
  return (
    <div>
      <h2>Color Picker</h2>
      {colors.map(({ label, color }) => {
        return (
          <span
            key={label}
            className="ColorPicker__color"
            style={{ backgroundColor: color }}
          ></span>
        );
      })}
    </div>
  );
};

export default ColorPicker;
