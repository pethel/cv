import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Text.css';

const Text = ({ className, children, size = 'lg', alternateColor, noMargin = false }) =>
  React.cloneElement(children, {
    className: cn(className, styles[size], { [styles.alternateColor]: alternateColor }, { [styles.noMargin]: noMargin })
  });

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alternateColor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  noMargin: PropTypes.bool
};

export default Text;
