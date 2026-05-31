import { useState } from 'react'
import logo from '../../assets/yumbox-logo.svg'
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'
import styles from './Header.module.scss'
import '../../index.scss'

const cartItemsCount = 2;
const cartItemsPrice = 2568;

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header>
            <div className={'container'}>
                {/* DESKTOP */}
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

                {/* MOBILE */}
                <div className={styles['header-mobile']}>
                    <div className={styles['logo-wrapper']}>
                        <img src={logo} alt="logo" />
                    </div>
                    <button className={styles['burger']} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Меню {isMenuOpen ? <><img src={close}/></> : <><img src={burger}/></>}
                    </button>
                </div>
            </div>
            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className={styles['mobile-menu']}>
                    <div className={styles['cart-wrapper']}>
                        <div className={styles['cart-items-count']}>{cartItemsCount}</div>
                        <div className={styles['cart-items-price']}>{cartItemsPrice.toLocaleString('uk-UA')} грн</div>
                    </div>
                    <nav>
                        <a href="#">Каталог</a>
                        <a href="#">Кейтеринг</a>
                        <a href="#">Про нас</a>
                        <a href="#">Контакти</a>
                    </nav>
                </div>
            )}

        </header>
    )
}

export default Header;