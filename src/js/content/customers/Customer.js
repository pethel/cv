import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../common';

const Customer = ({ name, children }) => (
  <article>
    <header>
      <Text size="md">
        <h1>{name}</h1>
      </Text>
    </header>
    {children}
  </article>
);

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Customer;
