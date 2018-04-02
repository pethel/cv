import React from 'react';
import PropTypes from 'prop-types';
import { Block, Text, HeaderRow, formatPeriod } from '../../common';

const WorkingExperience = ({ name, title, text, from, to = '' }) => (
  <Block type="section">
    <header>
      <HeaderRow
        left={<Text size="md">
          <h1>{name}</h1>
        </Text>}
        rigth={<Text size="sm" alternateColor><span>{formatPeriod(from, to)}</span></Text>}>
      </HeaderRow>
      <span>{title}</span>
    </header>
    <p>{text}</p>
  </Block>
);

WorkingExperience.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default WorkingExperience;
