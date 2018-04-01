import React from 'react';
import styles from './Content.css';
import QualificationsList from './qualifications';
import Customers from './customers';
import Certifications from './certifications';
import WorkingExperiences from './working-experiences';

const Content = () => (
  <main className={styles.content}>
    <h1>Karriereprofil</h1>
    <p>Skrive programvare og lære mer om det er min stora lidenskap. Gjennom min karriere har jeg jobbet med programvare over hele stakken. Selv om jeg liker programmering generelt, er frontend utvikling nærmest hjertet mitt. Derfor har det vært mitt hovedfokus gjennom det meste av karrieren min. De siste årene har jeg laget produkter for finans/forsikring og statlige enheter.</p>
    <QualificationsList />
    <Customers />
    <Certifications />
    <WorkingExperiences />
  </main>
);

export default Content;
