import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Block.css'

const Block = ({ type, children, marginBottom, indentLeft }) =>
  React.createElement(type, { className: cn(styles[marginBottom], styles[indentLeft]) }, children);

Block.propTypes = {
  type: PropTypes.oneOf(['section', 'article', 'div']).isRequired,
  marginBottom: PropTypes.oneOf(['bottomSM', 'bottomMD', 'bottomLG' ]),
  indentLeft: PropTypes.oneOf(['leftSM', 'leftMD', 'leftLG' ]),
  children: PropTypes.any
};

export default Block;
