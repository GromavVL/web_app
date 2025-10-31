import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import { useNavigate } from 'react-router-dom';

function Catalog() {
  const navigate = useNavigate();
  const [laptopProducts, setLaptopProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/Laptops')
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.id,
          brand: item.brand,
          model: item.model,
          price: item.price,
          images: item.images[0],
        }));
        setLaptopProducts(formattedData);
      })
      .catch((err) => console.log('err >> ', err));
  }, []);
  const handleProductClick = (id) => {
    navigate(`/catalog/${id}`);
  };
  return (
    <main className={styles.mainHome}>
      <select className={styles.sortSelect}>
        <option>Від дешевих до дорогих</option>
        <option>Від дорогих до дешевих</option>
        <option>За рейтингом</option>
        <option>Новинки</option>
      </select>
      <section className={styles.sectionCart}>
        {laptopProducts.length === 0 ? (
          <p>Завантаження</p>
        ) : (
          laptopProducts.map((product) => (
            <article
              className={styles.cartLaptop}
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
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
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Catalog;
