import React from 'react';

import styles from './Counter.module.css';

const Value = ({ value }) => (
  <span className={styles.Counter__value}>{value}</span>
);


export default Value;