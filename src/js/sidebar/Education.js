import React from 'react';
import SecondaryText from './SecondaryText';
import Block from './Block';
import BlockRow from './BlockRow';
import OrderedList from './OrderedList';

const Education = () => (
  <Block>
    <h1>Utdanning</h1>
    <BlockRow>
      <OrderedList>
        <li>
          <h2>Master of Science i informatikk</h2>
          <SecondaryText>Umeå universitet<br/>2005 - 2010</SecondaryText>
        </li>
        <li>
          <h2>Bachelor of Science i elektronikk</h2>
          <SecondaryText>Umeå universitet<br/>2005 - 2008</SecondaryText>
        </li>
      </OrderedList>
    </BlockRow>
  </Block>
);


export default Education;