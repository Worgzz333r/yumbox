import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ProdGrid from './components/ProductGrid/ProductGrid'
import Cart from './components/Cart/Cart'

function App() {
  // Стан кошика з збереженням в localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Зберігаємо кошик в localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Додавання товару або збільшення кількості якщо вже є
  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Видалення товару з кошика
  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // Зміна кількості товару, видаляє якщо кількість стає 0
  function updateQuantity(id, delta) {
    setCart(prev => prev
      .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      .filter(item => item.quantity > 0)
    )
  }

  // Підрахунок суми та знижки
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = cartTotal >= 1000 ? 0.9 : 1
  const cartTotalWithDiscount = Math.round(cartTotal * discount)

  // Оформлення замовлення — виводить в консоль та очищає кошик
  function handleCheckout() {
    const order = cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    }))
    console.log('Замовлення:', order)
    console.log('Сума:', cartTotalWithDiscount + 50)
    setCart([])
    setIsCartOpen(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div>
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Cart
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        cartTotal={cartTotal}
        cartTotalWithDiscount={cartTotalWithDiscount}
        discount={discount}
        handleCheckout={handleCheckout}
      />
      <div className={`toast ${showToast ? 'toast-visible' : ''}`}>
        Замовлення прийнято!
      </div>
      <Slider />
      <ProdGrid addToCart={addToCart} cart={cart} />
    </div>
  )
}

export default App