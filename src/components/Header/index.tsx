import React from 'react';
import Navigation from '../Navigation/index';

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <Navigation/>
    </div>
  )
}

export default Header;