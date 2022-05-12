import React from 'react'
import {Link} from 'react-router-dom'

import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.container}>
      <Link to='/' className={styles.logo}>
        <h1>Todo List</h1>
      </Link>
      <ul>
        <li>
          <Link to='/todos' className={styles.item}>Todos</Link>
        </li>
        <li>
          <Link to='/about' className={styles.item}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;