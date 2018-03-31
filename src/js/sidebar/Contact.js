import React from 'react';
import Icon from '../icon';
import styles from './Contact.css';
import Block from './Block';
import BlockRow from './BlockRow';

const Contact = () => (
  <Block>
    <BlockRow>
      <a href="mailto:phe@alternus.no">
        <Icon type="email" className={styles.icon}/>
        <span>phe@alternus.no</span>
      </a>
    </BlockRow>
    <BlockRow>
      <a href="tel:00479400 3902">
        <Icon type="phone" className={styles.icon}/>
        <span>9400 3902</span>
      </a>
    </BlockRow>
  </Block>
);

export default Contact;
