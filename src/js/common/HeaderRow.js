import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderRow.css';

const HeaderRow = ({ left, rigth}) => (
  <div className={styles.headerRow}>
    <div>{left}</div>
    <div>{rigth}</div>
  </div>
);

HeaderRow.propTypes = {
  left: PropTypes.any,
  rigth: PropTypes.any,
};

export default HeaderRow;
