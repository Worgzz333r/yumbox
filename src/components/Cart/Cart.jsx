import styles from './Cart.module.scss'
import trash from '../../assets/trash.svg'

function Cart({ cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartTotalWithDiscount, discount, handleCheckout }) {
    return (

        <>
            <div
                className={`${styles['cart-overlay']} ${isCartOpen ? styles['open'] : ''}`}
                onClick={() => setIsCartOpen(false)}
            />



            <div className={`${styles['cart-sidebar']} ${isCartOpen ? styles['open'] : ''}`}>
                <div className={styles['cart-header']}>
                    <h2>Корзина</h2>
                    <button onClick={() => setIsCartOpen(false)}>✕</button>
                </div>

                <div className={styles['cart-items']}>
                    {cart.map(item => (
                        <div key={item.id} className={styles['cart-item']}>
                            <div className={styles['cart-item-top']}>
                                <img src={item.image} alt={item.name} />
                                <div className={styles['cart-item-info']}>
                                    <p>{item.name}</p>
                                    <p>{item.weight}</p>
                                </div>
                                <div className={styles['cart-item-right']}>
                                    <button onClick={() => removeFromCart(item.id)}>
                                        <img src={trash} alt="remove" />
                                    </button>
                                </div>
                            </div>

                            <div className={styles['cart-item-bottom-border']}>
                                <div className={styles['cart-item-bottom']}>
                                    <p className={styles['cart-item-price']}>{item.price * item.quantity} ₴</p>
                                    <div className={styles['quantity-controls']}>
                                        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles['cart-footer']}>
                    <div className={styles['cart-delivery']}>
                        <span>Доставка</span>
                        <span>50 ₴</span>
                    </div>

                    <div className={`${styles['cart-discount']} ${discount < 1 ? styles['visible'] : ''}`}>
                        <span>Знижка 10%</span>
                        <span>− {Math.round(cartTotal * 0.1)} ₴</span>
                    </div>

                    <button className={styles['cart-checkout']} onClick={handleCheckout}>
                        Оформити за {(cartTotalWithDiscount + 50).toLocaleString('uk-UA')} ₴
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart