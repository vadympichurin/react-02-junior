import React from 'react';

import styles from './Counter.module.css';

class Counter extends React.Component {
  handleIncrement = (event) => {
    console.log('Clicked on increment btn');

    // const target = event.target;
    const { target } = event;

    setTimeout(() => {
        console.log('in setTimeout : ', target);
    }, 5000);
  }

  handleDecrement = (event) => {
    console.log('Clicked on decrement btn');
    console.log(event.target);
  }

  render() {
    return (
      <div className={styles.Counter}>
        <span className={styles.Counter__value}>0</span>

        <div className={styles.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button
            type="button"
            onClick={this.handleDecrement}
          >
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
