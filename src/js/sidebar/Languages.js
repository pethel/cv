import React from 'react';
import SecondaryText from './SecondaryText';
import Block from './Block';
import BlockRow from './BlockRow';
import OrderedList from './OrderedList';

const Languages = () => (
  <Block>
    <h1>Språk</h1>
    <BlockRow>
      <OrderedList>
        <li>Svensk <SecondaryText>(morsmål)</SecondaryText></li>
        <li>Norsk <SecondaryText>(flytende)</SecondaryText></li>
        <li>Engelsk <SecondaryText>(flytende)</SecondaryText></li>
      </OrderedList>
    </BlockRow>
  </Block>
);

export default Languages;
