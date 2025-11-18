import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import styles from './ProductPage.module.scss';

function ProductPage() {
  const { id } = useParams();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/Laptops/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Не вдалося завантажити товар');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className={styles.productPageHome}>
        <p>Завантаження...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.productPageHome}>
        <p>Помилка: {error}</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className={styles.productPageHome}>
        <p>Товар не знайдено</p>
      </main>
    );
  }
  const hasImages = product.images && product.images.length > 0;
  const imageCount = hasImages ? product.images.length : 0;

  const prevSlide = () => {
    if (!hasImages) return;
    setCurrentImg((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (!hasImages) return;
    setCurrentImg((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  return (
    <main className={styles.productPageHome}>
      <section className={styles.sectionLaptop}>
        <div className={styles.infoComtainer}>
          <div className={styles.sliderContainer}>
            {hasImages && imageCount > 1 && (
              <button
                className={`${styles.prevSlide} ${styles.navBtn}`}
                onClick={prevSlide}
                aria-label="Попереднє зображення"
              >
                {'<'}
              </button>
            )}
            {hasImages ? (
              <img
                className={styles.laptopIMg}
                src={product.images[currentImg]}
                alt={`${product.brand} ${product.model}`}
              />
            ) : (
              <div className={styles.noImage}>Зображення відсутнє</div>
            )}
            {hasImages && imageCount > 1 && (
              <button
                className={`${styles.nextSlide} ${styles.navBtn}`}
                onClick={nextSlide}
                aria-label="Наступне зображення"
              >
                {'>'}
              </button>
            )}
          </div>
        </div>
        <div className={styles.laptopCharacteristic}>
          <div className={styles.headerSection}>
            <h3 className={styles.charakterTitle}>Характеристика</h3>
            <button
              className={`${styles.wishlistBtn} ${isInWishlist(Number(id)) ? styles.wishlistActive : ''}`}
              onClick={() => toggleWishlist(Number(id))}
              aria-label="Додати до списку бажань"
            >
              ♥ {isInWishlist(Number(id)) ? 'У списку бажань' : 'Додати до бажань'}
            </button>
          </div>
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
              <p>Колір:</p>
              <span className={styles.productEl}>{product.color}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Операційна система:</p>
              <span className={styles.productEl}>{product.os}</span>
            </li>
            <li className={styles.infoEl}>
              <p>Процесор:</p>
              <span className={styles.productEl}>
                {product.cpu.brand} {product.cpu.model} ({product.cpu.cores} ядер, {product.cpu.threads} потоків)
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Відеокарта:</p>
              <span className={styles.productEl}>
                {product.gpu.brand} {product.gpu.model} ({product.gpu.vram} ГБ {product.gpu.vram_type})
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Оперативна пам'ять:</p>
              <span className={styles.productEl}>
                {product.ram.capacity} ГБ {product.ram.type} {product.ram.freq} МГц
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Накопичувач:</p>
              <span className={styles.productEl}>
                {product.storage.capacity} {product.storage.type} ({product.storage.interface})
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Дисплей:</p>
              <span className={styles.productEl}>
                {product.display.size}" {product.display.resolution}, {product.display.matrix_type}, {product.display.refresh_rate} Гц
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Порти:</p>
              <span className={styles.productEl}>
                USB {product.ports.usb}, USB-C {product.ports.usb_c}, Wi-Fi {product.ports.wifi}, Bluetooth {product.ports.bluetooth}
              </span>
            </li>
            <li className={styles.infoEl}>
              <p>Ціна:</p>
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