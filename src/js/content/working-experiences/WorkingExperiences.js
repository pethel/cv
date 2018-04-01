import React from 'react';
import WorkingExperience from './WorkingExperience';
import { capra, itverket } from './data';

const WorkingExperiences = () => (
  <section>
    <h1>Arbeidserfaring</h1>
    <WorkingExperience name={itverket.name} title={itverket.title} text={itverket.text} from={itverket.from} to={itverket.to} />
    <WorkingExperience name={capra.name} title={itverket.title} text={capra.text} from={capra.from} to={capra.to} />
  </section>
);

export default WorkingExperiences;
