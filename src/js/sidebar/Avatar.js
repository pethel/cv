import React from 'react';
import styles from './Avatar.css';

const Avatar = () =>
  <div className={styles.avatar}>
    <div className={styles.picture}>
      <img src={require('../../img/profile.png')} alt="Profile picture" />
    </div>
    <header>
      <h1>Peter Hellstrand</h1>
      <h2>Webutvikler</h2>
    </header>
  </div>;

export default Avatar;
