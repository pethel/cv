import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlockRow.css';

const BlockRow = ({ children }) => (
  <div className={styles.row}>
    {children}
  </div>
);

BlockRow.propTypes = {
  children: PropTypes.any
};

export default BlockRow;
