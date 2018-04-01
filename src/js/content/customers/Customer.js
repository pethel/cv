import React from 'react';
import PropTypes from 'prop-types';
import styles from './Customer.css';

const Customer = ({ name, children }) => (
  <article className={styles.customer}>
    <h1>{name}</h1>
    {children}
  </article>
);

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Customer;
