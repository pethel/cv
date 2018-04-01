import React from 'react';
import PropTypes from 'prop-types';
import styles from './WorkingExperience.css';

const formatPeriod = (from, to) => {
  if (from === to) {
    return from
  }
  return `(${from} - ${to})`;
};


const WorkingExperience = ({ name, title, text, from, to = '' }) => (
  <section className={styles.workingExperience}>
    <header>
      <div className={styles.topRow}>
        <h1>{name}</h1>
        <span className={styles.time}>{formatPeriod(from, to)}</span>
      </div>
      <span className={styles.title}>{title}</span>
    </header>
    <p>{text}</p>
  </section>
);

WorkingExperience.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default WorkingExperience;
