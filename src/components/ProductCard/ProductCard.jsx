import styles from './ProductCard.module.scss'
import { useState } from 'react'
import check from '../../assets/check-circle.svg'


function ProductCard({ product, addToCart, cart }) {
  const cartItem = cart.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  function handleClick() {
    addToCart(product)
  }

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles['product-info-wrapper']}>

        <p className={styles['product-name']}>{product.name}</p>
        <p className={styles['product-weight']}>{product.weight}</p>

        <div className={`${styles['product-card-bottom']} ${quantity > 0 ? styles['active'] : ''}`}>

          {quantity === 0 ? (
            <p className={styles['product-price']}>{product.price} грн</p>
          ) : null}

          <button className={styles['product-cart-btn']} onClick={handleClick}>
            {quantity === 0
              ? 'Додати в кошик'
              : <><img src={check} alt="logo" /> В кошику <strong>{quantity} шт</strong> за <strong>{product.price * quantity} грн</strong></>
            }
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard