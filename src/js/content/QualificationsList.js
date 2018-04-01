import React from 'react';
import Qualifications from './Qualifications';
import styles from './QualificationsList.css';

const QualificationsList = () => (
  <section>
    <Qualifications className={styles.list} title="Frontend" score={9} skills={[
      'Javascript',
      'CSS',
      'HTML',
      'React',
      'Redux',
      'AngularJS',
      'LESS/SASS/PostCSS',
      'npm/yarn',
      'karma/chai/sinon/jasmine',
      'Enonic']} />
    <Qualifications className={styles.list} title="Backend" score={7} skills={[
      'Java',
      'Maven',
      'Spring Framework',
      'Spring Boot',
      'JUnit'
    ]} />
    <Qualifications className={styles.list} title="Devops" score={5} skills={[
      'Docker',
      'Jenkins',
      'Aws',
      '*nix'
    ]}/>
  </section>
);

export default QualificationsList;


// LESS, SASS, AngularJS, npm, webpack, Grunt, Gulp, Karma, Jasmine, Protractor, Babel, jQuery, REST, Svn, Git, Enonic XP, Enonic CMS, XML, XSLT, XPath, Java, jUnit, Spring Framework, JPA/Hibernate, Jenkins, Maven, Jira/Confluence, IntelliJ IDEA
