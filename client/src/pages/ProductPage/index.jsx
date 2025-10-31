import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Laptops`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((l) => l.id === Number(id));
        setProduct(found);
      })
      .catch((err) => console.log('err :>> ', err));
  }, [id]);

  if (!product) {
    return <p>Завантаження</p>;
  }

  return (
    <main>
      <div>{/* Слайдер зображень */}</div>

      <h1>
        {product.brand} {product.model}
      </h1>
      <p>Опис: {product.description}</p>
      <p>Ціна: {product.price} $</p>

      <h3>Характеристика</h3>
      <div>
        <ul>
          <li>Колір: {product.color}</li>
          <li>ОС: {product.os}</li>
          <li>
            Процесор: {product.cpu.brand} {product.cpu.model} (
            {product.cpu.cores} ядер, {product.cpu.threads} потоків)
          </li>
          <li>
            Відеокарта: {product.gpu.brand} {product.gpu.model} (
            {product.gpu.vram} ГБ {product.gpu.vram_type})
          </li>
          <li>
            ОЗУ: {product.ram.capacity} ГБ {product.ram.type} {product.ram.freq}{' '}
            МГц
          </li>
          <li>
            Накопичувач: {product.storage.capacity} {product.storage.type} (
            {product.storage.interface})
          </li>
          <li>
            Дисплей: {product.display.size}" {product.display.resolution},{' '}
            {product.display.matrix_type}, {product.display.refresh_rate} Гц
          </li>
          <li>
            Порти: USB {product.ports.usb}, USB-C {product.ports.usb_c}, Wi-Fi{' '}
            {product.ports.wifi}, Bluetooth {product.ports.bluetooth}
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ProductPage;
