import React from 'react';
import styles from './Header.module.scss';
import { IoSearchOutline} from 'react-icons/io5';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <img
        className={styles.headerWrapperLogo}
        src="/src/assets/logo.png"
        alt="Logo"
      />
      <nav className={styles.navMenu}>
        <ul className={styles.ulList}>
          <li className={styles.liItem}>Home</li>
          <li className={styles.liItem}>Каталог</li>
          <li className={styles.liItem}>Cписок бажань</li>
          <li className={styles.liItem}>Про нас</li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input className={styles.searchInput} type="text" placeholder="Пошук" />
        <button className={styles.searchButton}>Знайти <IoSearchOutline /></button>
      </div>
    </header>
  );
}

export default Header;