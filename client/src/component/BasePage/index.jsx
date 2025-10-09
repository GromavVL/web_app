import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './BasePage.module.scss'
import { Outlet } from 'react-router';

function BasePage() {
  return (
    <div className={styles.basePageContainer}>
      <Header />
      <div className={styles.container}>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}

export default BasePage;