import { Button, Stack } from 'react-bootstrap'
import Image from 'next/image'
import { XIcon, PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

import { CartItem } from '@/interfaces/product'
import { formatCurrency } from '@/utils/formartter'
import { useShoppingCart } from '@/context/ShoppingCartContext'

export function CartItem({ cartItem }: { cartItem: CartItem }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

  const product = cartItem.product
  //const product = storeItems.find((i) => i.id === id)
  if (cartItem == null) return null

  const totalPrice = product.price * cartItem.quantity;
  return (
    <div className="flex justify-between mt-6">
      <div className="flex">

        <Image src={product.thumb_url} className="cursor-pointer rounded" height={80} width={80} alt={product.title} />
        <div className="mx-3">
          <h3 className="text-sm text-gray-600 text-bold">{product.title}</h3>
          <div className="flex items-center mt-2">
            {cartItem.quantity > 1 && (
              <button onClick={() => decreaseCartQuantity(product)}
                className="text-blue-500 focus:outline-none focus:text-gray-600"
              >
                <MinusCircleIcon className="h-7 w-7" />
              </button>
            )}
            <button onClick={() => increaseCartQuantity(product)} className="text-green-700 focus:outline-none focus:text-gray-600"
            >
              <PlusCircleIcon className="h-7 w-7" />
            </button>
            <h3 className="text-gray-700 mx-2 text-2xl font-bold">{cartItem.quantity}</h3>
            <button onClick={() => removeFromCart(product)} className="text-red-600 focus:outline-none focus:text-gray-600" >
              <XIcon className="h-7 w-7" />
            </button>
          </div>
          <h4 className="text-gray-600 text-2xl font-medium">KES {totalPrice.toLocaleString("en-US")}</h4>
        </div>
      </div>
      
    </div>
  )
}
