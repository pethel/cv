import React from 'react';
import styles from './Certifications.css';

const Certifications = () => (
  <section className={styles.certifications}>
    <h1>Sertifiseringer</h1>
    <ol>
      <li>
        <span className={styles.cirle}/>
        <span className={styles.certification}>AWS Certified Developer - Associate</span>
        <span className={styles.time}>2017</span>
      </li>
      <li>
        <span className={styles.cirle}/>
        <span className={styles.certification}>Certified Enonic CMS Developer</span>
        <span className={styles.time}>2014</span>
      </li>
      <li>
        <span className={styles.cirle}/>
        <span className={styles.certification}>Java EE 6 Persistence API Developer Certified Expert (1Z0-898)</span>
        <span className={styles.time}>2013</span>
      </li>
      <li>
        <span className={styles.cirle}/>
        <span className={styles.certification}>Java EE 6 Web Component Developer Certified Expert (1Z0-899)</span>
        <span className={styles.time}>2012</span>
      </li>
      <li>
        <span className={styles.cirle}/>
        <span className={styles.certification}>Sun Certified Java Programmer for the Java Platform, Standard Edition 6 (CX-310-065)</span>
        <span className={styles.time}>2011</span>
      </li>
    </ol>
  </section>
);

export default Certifications;
