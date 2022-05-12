import React from 'react'
import Footer from '../Footer';
import Header from '../Header';


import styles from './Layout.module.css';


type Props={
  children: JSX.Element
}
function Layout({children}:Props) {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;