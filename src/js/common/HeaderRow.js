import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderRow.css';

const HeaderRow = ({ left, right }) => (
  <div className={styles.headerRow}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

HeaderRow.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any
};

export default HeaderRow;
