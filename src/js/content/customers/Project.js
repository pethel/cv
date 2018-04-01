import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Project.css';

const formatPeriod = (from, to) => {
  if(from === to) {
    return from
  }
  return `(${from} - ${to})`;
};

const Project = ({ className, name, text, from, to = '', tools = [] }) => (
  <section className={cn(className)}>
    <div className={styles.title}>
      <h1>{name}</h1>
      <span className={styles.time}>{formatPeriod(from, to)}</span>
    </div>
    <p>{text}</p>
    <span className={styles.toolListTitle}>Teknologier og verktøy:</span>
    <ul className={styles.toolList}>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
  </section>
);

Project.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string),
  from: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default Project;
