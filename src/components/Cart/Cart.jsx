import { useState, useEffect } from 'react'
import styles from './Cart.module.scss'
import trash from '../../assets/trash.svg'

function Cart({ cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartTotalWithDiscount, discount, handleCheckout }) {

    const [showDiscount, setShowDiscount] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
        if (cart.length > 0) {
            setFooterVisible(true)
        } else {
            setTimeout(() => setFooterVisible(false), 300) // чекаємо поки анімація завершиться
        }
    }, [cart.length])

    useEffect(() => {
        if (discount < 1) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setShowDiscount(true))
            })
        } else {
            setShowDiscount(false)
        }
    }, [discount])

    const [removingIds, setRemovingIds] = useState([])

    function handleRemove(id) {
        setRemovingIds(prev => [...prev, id])
        setTimeout(() => {
            removeFromCart(id)
            setRemovingIds(prev => prev.filter(i => i !== id))
        }, 300)
    }

    return (

        <>
            <div
                className={`${styles['cart-overlay']} ${isCartOpen ? styles['open'] : ''}`}
                onClick={() => setIsCartOpen(false)}
            />



            <div className={`${styles['cart-sidebar']} ${isCartOpen ? styles['open'] : ''}`}>
                <div className={styles['cart-header']}>
                    <h2>Корзина</h2>
                    <button onClick={() => setIsCartOpen(false)} className={styles['cart-close']}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-1" y="7" width="20" height="4" fill="currentColor" transform="rotate(45 9 9)" />
                            <rect x="-1" y="7" width="20" height="4" fill="currentColor" transform="rotate(-45 9 9)" />
                        </svg>
                    </button>
                </div>

                <div className={styles['cart-items']}>
                    {cart.length === 0 ? (
                        <p className={styles['cart-empty']}>Кошик порожній</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className={`${styles['cart-item']} ${removingIds.includes(item.id) ? styles['removing'] : ''}`}>
                                <div className={styles['cart-item-top']}>
                                    <img src={item.image} alt={item.name} />
                                    <div className={styles['cart-item-info']}>
                                        <p>{item.name}</p>
                                        <p>{item.weight}</p>
                                    </div>
                                    <div className={styles['cart-item-right']}>
                                        <button onClick={() => handleRemove(item.id)}>
                                            <img src={trash} alt="remove" />
                                        </button>
                                    </div>
                                </div>

                                <div className={styles['cart-item-bottom-border']}>
                                    <div className={styles['cart-item-bottom']}>
                                        <p className={styles['cart-item-price']}>{item.price * item.quantity} ₴</p>
                                        <div className={styles['quantity-controls']}>
                                            <button onClick={() => {
                                                if (item.quantity === 1) {
                                                    handleRemove(item.id)
                                                } else {
                                                    updateQuantity(item.id, -1)
                                                }
                                            }}>−</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {footerVisible && (
                    <div className={`${styles['cart-footer']} ${cart.length === 0 ? styles['hidden'] : ''}`}>
                        <div className={styles['cart-delivery']}>
                            <span>Доставка</span>
                            <span>50 ₴</span>
                        </div>

                        <div className={`${styles['cart-discount']} ${discount < 1 && showDiscount ? styles['visible'] : ''}`}>
                            <div className={styles['cart-discount-inner']}>
                                <span>Знижка 10%</span>
                                <span>− {Math.round(cartTotal * 0.1)} ₴</span>
                            </div>
                        </div>

                        <button className={styles['cart-checkout']} onClick={handleCheckout}>
                            Оформити за {(cartTotalWithDiscount + 50).toLocaleString('uk-UA')} ₴
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart