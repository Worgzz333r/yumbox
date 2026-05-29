import logo from '../../assets/yumbox-logo.svg'
import styles from './Header.module.scss'

const cartItemsCount = 2;
const cartItemsPrice = 2568;

function Header() {
    return (
        <div className={styles['container']}>
            <div className={styles['header-wrapper']}>
                <div className={styles['logo-wrapper']}>
                    <img src={logo} alt="logo" />
                </div>

                <nav className={styles['header-nav']}>
                    <a href="#">Каталог</a>
                    <a href="#">Кейтеринг</a>
                    <a href="#">Про нас</a>
                    <a href="#">Контакти</a>
                </nav>

                <div className={styles['cart-wrapper']}>
                    <div className={styles['cart-items-count']}>
                        {cartItemsCount}
                    </div>
                    <div className={styles['cart-items-price']}>
                        {cartItemsPrice.toLocaleString('uk-UA')} грн
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;