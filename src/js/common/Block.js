import React from 'react';
import PropTypes from 'prop-types';
import styles from './Block.css'

const Block = ({ type, children, marginBottom }) =>
  React.createElement(type, { className: styles[marginBottom] }, children);

Block.propTypes = {
  type: PropTypes.oneOf(['section', 'article', 'div']).isRequired,
  marginBottom: PropTypes.oneOf(['bottomSM', 'bottomMD', 'bottomLG' ]),
  children: PropTypes.any
};

export default Block;
