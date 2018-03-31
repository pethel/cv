import React from 'react'
import PropTypes from 'prop-types';
import styles from './SecondaryText.css';

const SecondaryText = ({ children }) => <span className={styles.text}>{children}</span>;


SecondaryText.propTypes = {
  children: PropTypes.any
};

export default SecondaryText;
