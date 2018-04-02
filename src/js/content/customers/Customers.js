import React from 'react';
import Customer from './Customer';
import Project from './Project'
import { Text, Block } from '../../common';
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
  <Project name={name}
           text={text}
           from={from}
           to={to}
           tools={tools} />;

const Customers = () => (
  <Block type="section">
    <header>
      <Text size='xl'>
        <h1>Kunder og Prosjekter</h1>
      </Text>
    </header>
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
  </Block>
);

export default Customers;


