import React from 'react';
import styles from './Home.module.scss'
import LaptopSlider from '../../component/LaptopSlider';
import brands from '../../utils/validates';


function Home() {
  return (
    <div>
      <LaptopSlider />
      <section className={styles.laptopBrands}>
      <h2 className={styles.title}>Популярний продукт</h2>
      <div className={styles.brandsContainer}>
        {brands.map((brand) => (
          <article key={brand.name} className={styles.brands}>
            <img className={styles.brandImage} src={brand.image} alt={brand.name} />
            <h3 className={styles.brandName}>{brand.name}</h3>
          </article>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Home;