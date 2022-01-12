import React from 'react';

import styles from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visible: true,
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {

    const { visible } = this.state;

    return (
      <div className={styles.Dropdown}>
        <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <div className={styles.Dropdown__menu}>Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
