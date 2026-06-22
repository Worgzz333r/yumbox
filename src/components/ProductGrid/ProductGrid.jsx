import ProductCard from '../ProductCard/ProductCard'
import products from '../../data/products'
import styles from './ProductGrid.module.scss'

function ProductGrid({ addToCart }) {
    return (
        <div className="container">
            <div className={styles['grid-title']}>
                Найчастіше замовляють
            </div>
            <div className={styles['products-grid']}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default ProductGrid;