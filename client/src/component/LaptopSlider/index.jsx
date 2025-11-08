import React, { useEffect, useState } from 'react';
import styles from './LaptopSlider.module.scss';
import { images } from '../../utils/validates/index';

function LaptopSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };
  return (
    <div className={styles.sliderContainer}>
      <button
        className={`${styles.prevSlide} ${styles.navBtn}`}
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className={styles.sliderImg}
      />
      <button
        className={`${styles.nextSlide} ${styles.navBtn}`}
        onClick={nextSlide}
      >
        {'>'}
      </button>
    </div>
  );
}

export default LaptopSlider;
