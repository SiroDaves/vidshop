import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { CartItem } from './cart_item'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { XIcon, PlusCircleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: FC<CartProps> = ({ isCartOpen, setIsCartOpen }) => {
    const router = useRouter()
    const { cartItems, cartQuantity } = useShoppingCart()
    const totalPrice = cartItems.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity,
        0
    );

    function goToCheckout() {
        router.push('/checkout')
    }

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
            <hr className="my-3" />
            {
                cartQuantity > 0 ?
                    (<>
                        <div className="grid grid-cols-2 gap-4 content-end">
                            <div>
                                <h3 className="font-semibold ">Total: </h3>
                                <h3 className="font-semibold ">(KES) </h3>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 md:py-4 md:text-4xl">{totalPrice.toLocaleString("en-US")}</h3>
                            </div>
                        </div>
                        <a
                            className="flex items-center justify-center mt-4 px-3 py-2 bg-sky-500 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500 cursor-pointer"
                            onClick={goToCheckout}
                        >
                            <span>Checkout</span>
                            <ArrowNarrowRightIcon className="w-5 h-5" />
                        </a>
                    </>) : (
                        <></>
                    )

            }

        </div>
    );
};

export default ShoppingCart;