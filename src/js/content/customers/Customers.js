import React from 'react';
import styles from './Customers.css';
import Customer from './Customer';
import Project from './Project'
import { brukerflate, ekpressfortolling } from './projects';

const Customers = () => (
  <section>
    <h1>Kunder</h1>
    <Customer name="Toll">
      <Project className={styles.project}
               name={ekpressfortolling.name}
               text={ekpressfortolling.text}
               from={ekpressfortolling.from}
               to={ekpressfortolling.to}
               tools={ekpressfortolling.tools} />
      <Project className={styles.project}
               name={brukerflate.name}
               text={brukerflate.text}
               from={brukerflate.from}
               to={brukerflate.to}
               tools={brukerflate.tools} />
    </Customer>
  </section>
);

export default Customers;


