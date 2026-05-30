import styles from './ProductCard.module.scss'

function ProductCard({ product }) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles['product-info-wrapper']}>

        <p className={styles['product-name']}>{product.name}</p>
        <p className={styles['product-weight']}>{product.weight}</p>

        <div className={styles['product-card-bottom']}>
          <p className={styles['product-price']}>{product.price} грн</p>
          <button className={styles['product-cart-btn']}>Додати в кошик</button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard