import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './Block.css';

const Block = ({ className, children }) => (
  <section className={cn(className, styles.container)}>{children}</section>
);

Block.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Block;
