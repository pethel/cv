import React from 'react';
import styles from './Content.css';
import Customers from './customers';
import Certifications from './certifications';
import WorkingExperiences from './working-experiences';
import Profile from './profile'

const Content = () => (
  <main className={styles.content}>
    <Profile />
    <WorkingExperiences />
    <Certifications />
    <Customers />
  </main>
);

export default Content;
