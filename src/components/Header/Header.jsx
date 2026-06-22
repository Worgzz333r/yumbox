import logo from '../../assets/yumbox-logo.svg'
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'
import styles from './Header.module.scss'
import '../../index.scss'
import lin from '../../assets/linkedin.svg'
import ig from '../../assets/instagram.svg'
import f from '../../assets/facebook.svg'
import { useState, useEffect } from 'react'


function Header({ cartCount, cartTotal }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

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
                            {cartCount}
                        </div>
                        <div className={styles['cart-items-price']}>
                            {cartTotal.toLocaleString('uk-UA')} грн
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div className={styles['header-mobile']}>
                    <div className={styles['logo-wrapper']}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles['burger-wrapper']}>
                        <span>Меню</span>
                        <button className={`${styles['burger']} ${isMenuOpen ? styles['open'] : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className={styles['burger-icon']}>
                                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className={styles['line-top']} width="22" height="2" fill="white" />
                                    <rect className={styles['line-mid']} y="6" width="22" height="2" fill="white" />
                                    <rect className={styles['line-bot']} y="12" width="22" height="2" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* MOBILE MENU */}

            <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
                <div className={styles['cart-wrapper']}>
                    <div className={styles['cart-items-count']}>{cartCount}</div>
                    <div className={styles['cart-items-price']}>{cartTotal.toLocaleString('uk-UA')} грн</div>
                </div>
                <nav className={styles['mobile-nav-items']}>
                    <a href="#">Каталог</a>
                    <a href="#">Кейтеринг</a>
                    <a href="#">Про нас</a>
                    <a href="#">Контакти</a>
                </nav>
                <div className={styles['mobile-contacts']}>
                    <a href="mailto:yumbox.lutsk@gmail.com">yumbox.lutsk@gmail.com</a>
                    <a href="tel:+380938239293">+380 93 823 92 93</a>
                </div>

                <div className={styles['mobile-socials']}>
                    <a href="#"><img src={lin} alt="LinkedIn" /></a>
                    <a href="#"><img src={ig} alt="Instagram" /></a>
                    <a href="#"><img src={f} alt="Facebook" /></a>
                </div>
            </div>


            <div className={styles['cart-float']}>
                <div className={styles['cart-items-count']}>{cartCount}</div>
                <div className={styles['cart-items-price']}>{cartTotal.toLocaleString('uk-UA')} грн</div>
            </div>
        </header>
    )
}

export default Header;