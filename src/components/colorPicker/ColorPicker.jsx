import React, { Component } from 'react';

import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeColorIndex: 0,
  };

  setActiveColor = index => {
    this.setState({
      activeColorIndex: index,
    });
  };

  makeColorClasses = index => {
    const colorClasses = ['ColorPicker__color'];

    if (index === this.state.activeColorIndex) {
      colorClasses.push('active__color');
    }

    return colorClasses.join(' ');
  };

  render() {
    const { activeColorIndex } = this.state;
    const { colors } = this.props;

    const currentColorLabel = colors[activeColorIndex].label;
    return (
      <div>
        <h2>Color Picker</h2>
        <p>Current color: {currentColorLabel}</p>

        {colors.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              className={this.makeColorClasses(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveColor(index)}
            ></button>
          );
        })}
      </div>
    );
  }
}

export default ColorPicker;
