import { createContext, ReactNode, useContext, useState } from 'react'

import { CartItem, Product } from '@/interfaces/product'
import { useLocaleStorage } from '@/hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (product: Product) => number
  increaseCartQuantity: (product: Product) => void
  decreaseCartQuantity: (product: Product) => void
  removeFromCart: (product: Product) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocaleStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // Get the item by the product in the cart.
  function getItemQuantity(product: Product) {
    return cartItems.find((item) => item.product === product)?.quantity || 0
  }
  // Increase the item by the product in the cart.
  function increaseCartQuantity(product: Product) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product === product) == null) {
        return [...currItems, { product, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.product === product) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  // decrease the item by the product in the cart.
  function decreaseCartQuantity(product: Product) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product === product)?.quantity === 1) {
        return currItems.filter((item) => item.product !== product)
      } else {
        return currItems.map((item) => {
          if (item.product === product) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  // remove the item by the product in the cart.
  function removeFromCart(product: Product) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product !== product)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
