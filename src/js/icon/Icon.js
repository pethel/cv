import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Icon.css';

const Icon = ({ className, type, size = 'md'}) => <span className={cn(className, styles.icon, styles[type], styles[size])} />;

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['email']).isRequired,
  size: PropTypes.oneOf(['md']),
  spacerRight: PropTypes.oneOf(['md'])
};

export default Icon;
