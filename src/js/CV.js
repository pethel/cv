import React from 'react';
import styles from './CV.css';
import Sidebar from './sidebar';
import Content from './content';

const CV = () =>
	<div className={styles.container}>
    <Sidebar className={styles.sidebar}/>
    <Content />
  </div>;

export default CV;
