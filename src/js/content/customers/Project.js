import React from 'react';
import PropTypes from 'prop-types';
import { formatPeriod, Text, HeaderRow, InlineList, Block } from '../../common';

const Project = ({ className, name, text, from, to = '', tools = [] }) => (
  <Block type="article"
         marginBottom="bottomLG"
         indentLeft="leftMD">
    <header>
      <HeaderRow
        left={<Text size="sm" noMargin>
          <h1>{name}</h1>
        </Text>}
        right={<Text size="sm" alternateColor>
          <span>{formatPeriod(from, to)}</span>
        </Text>} />
    </header>
    <p>{text}</p>
    <InlineList title="Teknologier og verktøy" list={tools}/>
  </Block>
);

Project.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string),
  from: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default Project;
