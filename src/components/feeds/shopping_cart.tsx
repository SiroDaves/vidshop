import React, { FC, useState } from 'react'
import Image from 'next/image'

import { CartItem } from '../../components/items/cart_item'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { XIcon, PlusCircleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: FC<CartProps> = ({ isCartOpen, setIsCartOpen }) => {
    const { cartItems, cartQuantity } = useShoppingCart()

    const handleCheckout = async () => {
        /*const stripe = await stripePromise;
        const lineItems = {
            items: cart.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.qty,
            })),
        };
        const checkoutSession = await axios.post(
            "/api/checkout_sessions",
            lineItems
        );*/
        // console.log(checkoutSession);
        /*const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });*/
        // console.log(result);
    };

    return (
        <div
            className={`${isCartOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
                } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-20`}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-700">Your cart ({cartQuantity})</h3>
                <button className="text-gray-600 focus:outline-none">
                    <XIcon
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="h-5 w-5"
                    />
                </button>
            </div>
            <hr className="my-3" />

            {/* Items */}
            {
                cartQuantity > 0 ?
                    cartItems.map(
                        (item) => {
                            return <div key={item.product._id}><CartItem cartItem={item} /></div>;
                        }
                    ) : <span className="italic"> Your Cart is Empty </span>
            }

            {/* Bottom Menu */}
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input
                        className="form-input w-48"
                        type="text"
                        placeholder="Add promocode"
                    />
                    <button className="ml-3 flex items-center px-3 py-2 bg-sky-500 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
                        <span>Apply</span>
                    </button>
                </form>
            </div>
            <a
                className="flex items-center justify-center mt-4 px-3 py-2 bg-sky-500 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500 cursor-pointer"
                onClick={() => handleCheckout()}
            >
                <span>Checkout</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
            </a>
            
        </div>
    );
};

export default ShoppingCart;