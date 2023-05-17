import { Button, Stack } from 'react-bootstrap'
import Image from 'next/image'
import { XIcon, PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

import { CartItem } from '@/interfaces/product'
import { formatCurrency } from '@/utils/formatCurrency'
import { useShoppingCart } from '@/context/ShoppingCartContext'

export function CartItem({ cartItem }: { cartItem: CartItem }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

  const product = cartItem.product
  //const product = storeItems.find((i) => i.id === id)
  if (cartItem == null) return null
  return (
    <div className="flex justify-between mt-6">
      <div className="flex">

        <Image src={product.thumb_url} className="cursor-pointer rounded" height={80} width={80} alt={product.title} />
        <div className="mx-3">
          <h3 className="text-sm text-gray-600">{product.title}</h3>
          <div className="flex items-center mt-2">
            {cartItem.quantity > 1 && (
              <button onClick={() => decreaseCartQuantity(product)}
                className="text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <MinusCircleIcon className="h-7 w-7" />
              </button>
            )}
            <button onClick={() => increaseCartQuantity(product)}
              className="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <PlusCircleIcon className="h-7 w-7" />
            </button>
            <span className="text-gray-700 mx-2">{cartItem.quantity}</span>
            <button onClick={() => removeFromCart(product)}
              className="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <XIcon className="h-7 w-7" />
            </button>
          </div>
          <span className="text-gray-600">Kshs {product.price * cartItem.quantity}</span>
        </div>
      </div>
      
    </div>
  )
}
