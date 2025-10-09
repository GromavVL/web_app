import React from 'react';
import styles from './Header.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

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
          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} part="/">Home</NavLink>
          </li>

          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} part="/katalog">Каталог</NavLink>
          </li>
          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} part="/wishlist">Cписок бажань</NavLink>
          </li>
          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} part="/aboutus">Про нас</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input className={styles.searchInput} type="text" placeholder="Пошук" />
        <button className={styles.searchButton}>
          Знайти <IoSearchOutline />
        </button>
      </div>
    </header>
  );
}

export default Header;
