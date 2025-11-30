import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import { IoSearchOutline } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router';
import { useWishlist } from '../../../context/WishlistContext';

function Header() {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  // Закриття випадаючого списку при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Пошук ноутбуків при зміні запиту
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      fetch('http://localhost:5000/Laptops')
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((laptop) => {
            const searchLower = searchQuery.toLowerCase();
            return (
              laptop.brand.toLowerCase().includes(searchLower) ||
              laptop.model.toLowerCase().includes(searchLower)
            );
          });
          setSearchResults(filtered);
          setShowDropdown(true);
        })
        .catch((err) => console.log('Помилка пошуку:', err));
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (id) => {
    navigate(`/catalog/${id}`);
    setSearchQuery('');
    setShowDropdown(false);
  };

  const handleSearchSubmit = () => {
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0].id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

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
            <NavLink className={styles.navLinkElement} to="/">
              Home
            </NavLink>
          </li>

          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} to="/catalog">
              Каталог
            </NavLink>
          </li>
          <li className={styles.liItem}>
            <NavLink className={styles.navLinkElement} to="/wishlist">
              Cписок бажань
              {wishlist.length > 0 && (
                <span className={styles.wishlistBadge}>{wishlist.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.searchWrapper} ref={searchRef}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Пошук"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button className={styles.searchButton} onClick={handleSearchSubmit}>
            Знайти <IoSearchOutline />
          </button>
        </div>
        {showDropdown && searchResults.length > 0 && (
          <div className={styles.searchDropdown}>
            {searchResults.map((laptop) => (
              <div
                key={laptop.id}
                className={styles.searchResultItem}
                onClick={() => handleResultClick(laptop.id)}
              >
                <img
                  src={laptop.images[0]}
                  alt={laptop.model}
                  className={styles.searchResultImage}
                />
                <div className={styles.searchResultInfo}>
                  <p className={styles.searchResultBrand}>{laptop.brand}</p>
                  <p className={styles.searchResultModel}>{laptop.model}</p>
                  <p className={styles.searchResultPrice}>{laptop.price} $</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {showDropdown && searchQuery.trim().length > 0 && searchResults.length === 0 && (
          <div className={styles.searchDropdown}>
            <div className={styles.searchNoResults}>
              Нічого не знайдено
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
