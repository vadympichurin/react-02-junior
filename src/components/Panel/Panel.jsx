import React from "react";
import PropTypes from "prop-types"

import styles from './Panel.module.css';

// console.log(styles);

const Panel = ({ children, title }) => {
  return (
    <div className={styles.container} >
      {title && <h2 className={styles.title} >{title}</h2>}

      {children}
    </div>
  );
};

Panel.defaultProps = {
    title: '',
    children: [],
}

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Panel;
