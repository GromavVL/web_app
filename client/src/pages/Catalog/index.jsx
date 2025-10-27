import React from 'react';
import Asus from '../../assets/LaptopsImg/Asus/ASUSTUFGamingA14.png';
import styles from './Catalog.module.scss';

function Catalog() {
  return (
    <main className={styles.mainHome}>
      <select className={styles.sortSelect}>
        <option>Від дешевих до дорогих</option>
        <option>Від дорогих до дешевих</option>
        <option>За рейтингом</option>
        <option>Новинки</option>
      </select>
      <section className={styles.sectionCart}>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
        <article className={styles.cartLaptop}>
          <img className={styles.imgLaptop} src={Asus} alt="asus" />
          <div className={styles.cartInfo}>
            <p>Asus</p>
            <p>TUF Gaming F15</p>
          </div>
          <p className={styles.elPrice}>1200 $</p>
        </article>
      </section>
    </main>
  );
}

export default Catalog;
