import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import styles from './Wishlist.module.scss';

function Wishlist() {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wishlist.length === 0) {
      setWishlistProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch('http://localhost:5000/Laptops')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((item) => wishlist.includes(item.id))
          .map((item) => ({
            id: item.id,
            brand: item.brand,
            model: item.model,
            price: item.price,
            images: item.images[0],
          }));
        setWishlistProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження:', err);
        setLoading(false);
      });
  }, [wishlist]);

  const handleProductClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  if (loading) {
    return (
      <main className={styles.mainWishlist}>
        <h2 className={styles.title}>Список бажань</h2>
        <p>Завантаження...</p>
      </main>
    );
  }

  return (
    <main className={styles.mainWishlist}>
      <h2 className={styles.title}>Список бажань</h2>
      {wishlistProducts.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Ваш список бажань порожній</p>
          <button
            className={styles.catalogBtn}
            onClick={() => navigate('/catalog')}
          >
            Перейти до каталогу
          </button>
        </div>
      ) : (
        <section className={styles.sectionCart}>
          {wishlistProducts.map((product) => (
            <article className={styles.cartLaptop} key={product.id}>
              <button
                className={`${styles.heartBtn} ${isInWishlist(product.id) ? styles.heartActive : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                aria-label="Видалити зі списку бажань"
              >
                ♥
              </button>
              <div onClick={() => handleProductClick(product.id)}>
                <img
                  className={styles.imgLaptop}
                  src={product.images}
                  alt={product.model}
                />
                <div className={styles.cartInfo}>
                  <p>{product.brand}</p>
                  <p>{product.model}</p>
                </div>
                <p className={styles.elPrice}>{product.price} $</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Wishlist;