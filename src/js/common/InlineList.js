import React from 'react';
import PropTypes from 'prop-types';
import styles from './InlineList.css';

const InlineList = ({ title, list = [] }) => (
  <div className={styles.inlineList}>
    <span className={styles.title}>{title}:</span>
    <ul>{list.map(li => <li key={li}>{li}</li>)}</ul>
  </div>
);

InlineList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string)
};

export default InlineList;
