import { useState } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ProdGrid from './components/ProductGrid/ProductGrid'

function App() {
  const [cart, setCart] = useState([])

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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <Header cartCount={cartCount} cartTotal={cartTotal} />
      <Slider />
      <ProdGrid addToCart={addToCart} />
    </div>
  )
}

export default App