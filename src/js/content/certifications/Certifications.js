import React from 'react';
import styles from './Certifications.css';
import { Text, Block } from '../../common';

const Certifications = () => (
  <Block type="section" marginBottom="bottomLG">
    <header>
      <Text size="xl">
        <h1>Sertifiseringer</h1>
      </Text>
    </header>
    <ol className={styles.certifications}>
      <li>
        <span className={styles.circle} />
        AWS Certified Developer - Associate
        <Text size="sm" className={styles.year}>
          <span>2017</span>
        </Text>
      </li>
      <li>
        <span className={styles.circle} />
        Certified Enonic CMS Developer
        <Text size="sm" className={styles.year}>
          <span>2014</span>
        </Text>
      </li>
      <li>
        <span className={styles.circle} />
        Java EE 6 Persistence API Developer Certified Expert (1Z0-898)
        <Text size="sm" className={styles.year}>
          <span >2013</span>
        </Text>
      </li>
      <li>
        <span className={styles.circle} />
        Java EE 6 Web Component Developer Certified Expert (1Z0-899)
        <Text size="sm" className={styles.year}>
          <span >2012</span>
        </Text>
      </li>
      <li>
        <span className={styles.circle} />
        Sun Certified Java Programmer for the Java Platform, Standard Edition 6 (CX-310-065)
        <Text size="sm" className={styles.year}>
          <span >2011</span>
        </Text>
      </li>
    </ol>
  </Block>
);

export default Certifications;
