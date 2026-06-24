import { useState } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ProdGrid from './components/ProductGrid/ProductGrid'
import Cart from './components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  function updateQuantity(id, delta) {
    setCart(prev => prev
      .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      .filter(item => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = cartTotal >= 1000 ? 0.9 : 1
  const cartTotalWithDiscount = Math.round(cartTotal * discount)

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
  }

  function clearCart() {
    setCart([])
    setIsCartOpen(false)
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
      <Slider />
      <ProdGrid addToCart={addToCart} />
    </div>
  )
}

export default App