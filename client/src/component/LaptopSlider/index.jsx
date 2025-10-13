import React, { useEffect, useState } from 'react';
import styles from './LaptopSlider.module.scss';
import garantiaAsus from '../../assets/GarantiaAsus.webp';
import zenbook from '../../assets/Zenbook.webp';
import msiSlider from '../../assets/msiSlider.png';
import AsusP16 from '../../assets/AsusP16.webp';

const images = [
  {
    src: AsusP16,
    alt: 'Asus P16',
  },
  {
    src: garantiaAsus,
    alt: 'Asus 2',
  },
  {
    src: zenbook,
    alt: 'Asus 3',
  },
  {
    src: msiSlider,
    alt: ' Asus 4',
  },
];

function LaptopSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
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
      <button className={`${styles.prevSlide} ${styles.navBtn}`} onClick={prevSlide}>
        {'<'}
      </button>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className={styles.sliderImg}
      />
      <button className={`${styles.nextSlide} ${styles.navBtn}`} onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
}

export default LaptopSlider;