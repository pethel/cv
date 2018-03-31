import React from 'react';
import cn from 'classnames'
import Avatar from './Avatar';
import Contact from './Contact';
import styles from './Sidebar.css';

const Sidebar = ({ className }) =>
  <div className={cn(className, styles.sidebar)}>
    <Avatar />
    <Contact />
    <div className={styles.footer}/>
  </div>;

export default Sidebar;
