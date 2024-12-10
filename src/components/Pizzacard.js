import React, { useState } from 'react';
import './Pizzacard.css'; // Импорт стилей
import thegreatpizza from '../assets/images/thegreatpizza.jpg'; // Путь к изображению
import bucketIcon from '../assets/images/bucket.png'; // Путь к иконке корзины

function Pizzacard() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="pizzacard">
      <div className="label">Хит сезона</div>
      <img src={thegreatpizza} alt="Пицца Пепперони" className="pizza-image" />
      <h3 className="pizza-title">Пепперони</h3>
      <p className="pizza-description">Ничего лишнего! Томатный соус, колбаски Пепперони и сыр Моцарелла</p>
      <div className="size-selector">
        <select id="size" placeholder="Диаметр">
          <option value="">Диаметр</option>
          <option>Маленькая</option>
          <option>Средняя</option>
          <option>Большая</option>
        </select>
      </div>
      <div className="price">от 550₽</div>
      <div className="quantity-section">
        <div className="quantity-control">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <input className="quantity-input" type="text" readOnly value={quantity} />
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>
        <button className="cart-button">
          <img src={bucketIcon} alt="Корзина" />
        </button>
      </div>
    </div>
  );
}

export default Pizzacard;
