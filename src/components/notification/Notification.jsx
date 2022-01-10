import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

const Notification = ({ text, type }) => (
  <p className={type === 'success' ? styles.success : styles.error}>{text}</p>
);

Notification.defaultProps = {
  type: 'success',
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

export default Notification;
