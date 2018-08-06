import React from 'react';
import Block from './Block';
import BlockRow from './BlockRow';
import OrderedList from './OrderedList';

const Languages = () => (
  <Block>
    <h1>Språk</h1>
    <BlockRow>
      <OrderedList>
        <li>Svensk (morsmål)</li>
        <li>Norsk (Profesjonelt)</li>
        <li>Engelsk (flytende)</li>
      </OrderedList>
    </BlockRow>
  </Block>
);

export default Languages;
