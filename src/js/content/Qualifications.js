import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Qualifications.css';

const Qualifications = ({ className, title, score, skills }) => (
  <section className={cn(className, styles.qualifications)} aria-label={`${title}: ${score} av 10`}>
    <h1>{title}</h1>
    {Array.from({length: 10}).map((x, i) => <span key={i} className={cn(styles.score, {[styles.score2]: i < score })} />)}
    <ul>
      {skills.map((skill, i) => <li key={skill}>{skill}</li>)}
    </ul>
  </section>
);

Qualifications.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Qualifications;


