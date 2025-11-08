import React from 'react';
import styles from './ProductPage.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/Laptops`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setProduct(found);
      })
      .catch((err) => console.log('err :>> ', err));
  }, [id]);
  if (!product) {
    return <p>Завантаження</p>;
  }
  const prevSlide = () => {
    setCurrentImg((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentImg((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <main className={styles.productPageHome}>
      <section className={styles.sectionLaptop}>
        <div className={styles.infoComtainer}>
          <div className={styles.sliderContainer}>
            <button
              className={`${styles.prevSlide} ${styles.navBtn}`}
              onClick={prevSlide}
            >
              {'<'}
            </button>
            <img
              className={styles.laptopIMg}
              src={product.images[currentImg]}
              alt={`${product.brand} ${product.model}`}
            />
            <button
              className={`${styles.nextSlide} ${styles.navBtn}`}
              onClick={nextSlide}
            >
              {'>'}
            </button>
          </div>
        </div>
        <div className={styles.laptopCharacteristic}>
          <h3 className={styles.charakterTitle}>Характеристика</h3>
          <ul>
            <li className={styles.infoEl}>
              <p>Бренд:</p>
              <span className={styles.productEl}>{product.brand}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Модель:</p>
              <span className={styles.productEl}>{product.model}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Колір:</p>{' '}
              <span className={styles.productEl}>{product.color}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Операційна система </p>{' '}
              <span className={styles.productEl}>{product.os}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Процесор:</p>{' '}
              <span className={styles.productEl}>
                {product.cpu.brand} {product.cpu.model} ({product.cpu.cores}{' '}
                ядер, {product.cpu.threads} потоків{''})
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Відеокарта: </p>{' '}
              <span className={styles.productEl}>
                {product.gpu.brand} {product.gpu.model} ({product.gpu.vram} ГБ{' '}
                {product.gpu.vram_type})
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Оперативна пам'ять:</p>{' '}
              <span className={styles.productEl}>
                {product.ram.capacity} ГБ {product.ram.type} {product.ram.freq}{' '}
                МГц
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Накопичувач:</p>{' '}
              <span className={styles.productEl}>
                {' '}
                {product.storage.capacity} {product.storage.type} (
                {product.storage.interface})
              </span>
            </li>
            <li className={styles.infoEl}>
              <p> Дисплей:</p>{' '}
              <span className={styles.productEl}>
                {product.display.size}" {product.display.resolution},{' '}
                {product.display.matrix_type}, {product.display.refresh_rate} Гц
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Порти:</p>{' '}
              <span className={styles.productEl}>
                {' '}
                USB {product.ports.usb}, USB-C {product.ports.usb_c}, Wi-Fi{' '}
                {product.ports.wifi}, Bluetooth {product.ports.bluetooth}{' '}
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Ціна:</p>{' '}
              <span className={styles.productEl}>{product.price} $</span>
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.descriptionEl}>
        <p className={styles.titleEl}>
          Опис: {product.brand} {product.model}
        </p>
        <span className={styles.titleText}>{product.description}</span>
      </div>
    </main>
  );
}

export default ProductPage;