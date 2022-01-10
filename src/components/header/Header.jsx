import React from 'react';

import Logo from '../logo/Logo';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo text="LOGO" />
  </header>
);

export default Header;
