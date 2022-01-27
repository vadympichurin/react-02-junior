import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconButton.module.css';

const IconButton = ({ onClick, children }) => (
  <button 
    className={styles.iconButton} 
    type="button" 
    onClick={onClick}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
    onClick: () => null,
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default IconButton;
