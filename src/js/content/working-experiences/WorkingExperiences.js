import React from 'react';
import WorkingExperience from './WorkingExperience';
import { Block, Text } from '../../common';
import { capra, itverket } from './data';

const WorkingExperiences = () => (
  <Block type="section">
    <header>
      <Text>
        <h1>Arbeidserfaring</h1>
      </Text>
    </header>
    <WorkingExperience name={itverket.name} title={itverket.title} text={itverket.text} from={itverket.from} to={itverket.to} />
    <WorkingExperience name={capra.name} title={itverket.title} text={capra.text} from={capra.from} to={capra.to} />
  </Block>
);

export default WorkingExperiences;
