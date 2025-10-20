import React from 'react';
import styles from './LaptopBrands.module.scss';
import Asus from '../../assets/LaptopsImg/Asus/ASUSTUFGamingA14.png';
import Msi from '../../assets/LaptopsImg/Msi/RaiderA18HXA9W.png'; 
import Lenovo from '../../assets/LaptopsImg/Lenovo/LenovoLegion5.png';
import Gigabyte from '../../assets/LaptopsImg/Gigabyte/GIGABYTEGAMINGA16GA63H.png';
import Acer from '../../assets/LaptopsImg/Acer/PredatorHelios16.png';

function LaptopBrands() {
  return (
    <section className={styles.laptopBrands}>
      <h2 className={styles.title}>Популярний продукт</h2>
      <div className={styles.brandsContainer}>
        <article className={styles.brands}>
          <img className={styles.brandImage} src={Asus} alt="Asus" />
          <h3 className={styles.brandName}>Asus</h3>
        </article>
        <article className={styles.brands}>
          <img className={styles.brandImage} src={Msi} alt="Msi" />
          <h3 className={styles.brandName}>Msi</h3>
        </article>
        <article className={styles.brands}>
          <img className={styles.brandImage} src={Lenovo} alt="Lenovo" />
          <h3 className={styles.brandName}>Lenovo</h3>
        </article>
        <article className={styles.brands}>
          <img className={styles.brandImage} src={Gigabyte} alt="Gigabyte" />
          <h3 className={styles.brandName}>Gigabyte</h3>
        </article>
        <article className={styles.brands}>
          <img className={styles.brandImage} src={Acer} alt="Acer" />
          <h3 className={styles.brandName}>Acer</h3>
        </article>
      </div>
    </section>
  );
}

export default LaptopBrands;
