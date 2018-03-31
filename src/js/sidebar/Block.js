import React from 'react';
import PropTypes from 'prop-types';
import styles from './Block.css';

const Block = ({ children }) => (
  <section className={styles.container}>{children}</section>
);

Block.propTypes = {
  children: PropTypes.any
};

export default Block;
