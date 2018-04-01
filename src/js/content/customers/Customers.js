import React from 'react';
import styles from './Customers.css';
import Customer from './Customer';
import Project from './Project'
import {
  brukerflate,
  ekpressfortolling,
  bable,
  kundeutbytte,
  nettbutik,
  nyttIntranett,
  skolemelk,
  tine14,
  instaspill,
  driftslogg,
  esporing
} from './data';

const getProject = ({ name, text, from, to, tools }) =>
  <Project className={styles.project}
           name={name}
           text={text}
           from={from}
           to={to}
           tools={tools} />;

const Customers = () => (
  <section>
    <h1>Kunder</h1>
    <Customer name="Toll">
      {getProject(ekpressfortolling)}
      {getProject(brukerflate)}
    </Customer>
    <Customer name="Gjensidige Forsikring">
      {getProject(bable)}
      {getProject(kundeutbytte)}
      {getProject(nettbutik)}
      {getProject(nyttIntranett)}
    </Customer>
    <Customer name="Tine">
      {getProject(skolemelk)}
      {getProject(tine14)}
    </Customer>
    <Customer name="Norsk Tipping">
      {getProject(instaspill)}
    </Customer>
    <Customer name="Mesta">
      {getProject(driftslogg)}
    </Customer>
    <Customer name="EDB ErgoGroup">
      {getProject(esporing)}
    </Customer>
  </section>
);

export default Customers;


