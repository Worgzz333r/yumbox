import ProductCard from '../ProductCard/ProductCard'
import products from '../../data/products'
import styles from './ProductGrid.module.scss'


function ProductGrid() {
    return (
        <div className={'container'}>
            <div className="products-grid">
                <div className={styles['grid-title']}>
                    Найчастіше замовляють
                </div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default ProductGrid;