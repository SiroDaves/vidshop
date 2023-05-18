import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaPlus, FaUserCircle, FaInbox, FaShoppingCart } from 'react-icons/fa'

import { useAuth } from '@/context/AuthContext'
import { getFirebaseUser } from '@/slices/authSlice'
import { UserDropdown, BadgeIcon } from './menu_helper'
import ShoppingCart from '@/components/cart/shopping_cart'
import { useShoppingCart } from '@/context/ShoppingCartContext'

export default function NavBar({ }) {
  const [navbar, setNavbar] = useState(false)
  const user = useSelector(getFirebaseUser)
  const { cartQuantity } = useShoppingCart()

  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()
  const { currentUser } = useAuth()

  function goToUpload() {
    router.push('/upload')
  }

  function goToLogin() {
    router.push('/login')
  }

  const { logoutUser } = useAuth()
  function goToLogout() {
    logoutUser()
    router.push('/')
  }

  return (
    <>
      <nav className="fixed top-0 z-10 w-full px-2 py-1 shadow bgNav md:px-5 bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="justify-between px-4 mx-auto md:flex md:items-center md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-2">
              <Link href="/">
                <Image src="/vidshop.png" className="cursor-pointer" height={50} width={50} alt="logo" />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-3 rounded-md outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"
                }`}
            >
              {/*<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>

              <li className="w-full py-2 pl-1 text-black hover:text-indigo-200">
                <Link href={"/profile"}>Profile</Link>
              </li>
            </ul>*/}
              <input
                className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Search"
              />

              <div className="flex flex-col mt-4 space-y-5 items md:hidden">
                <div className="flex items-center p-1 cursor-pointer" >
                  <div className="w-full py-2 pl-1 text-white" onClick={goToUpload}> CREATE </div>
                </div>
                <div className="flex items-center p-1 cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
                  <div className="w-full py-2 pl-1 text-white" > SHOPPING CART </div>
                  {cartQuantity > 0 && (<div className='px-2 py-1 text-sm bg-red-500 text-white rounded-full border-2 border-white'>
                    {cartQuantity}
                  </div>)}
                </div>
                {currentUser ? (
                  <div className="flex items-center p-1 cursor-pointer" >
                    <div className="w-full py-2 pl-1 text-white" onClick={goToLogout} > LOGOUT </div>
                  </div>
                ) : (
                  <div className="flex items-center p-1 cursor-pointer" >
                    <div className="w-full py-2 pl-1 text-white" onClick={goToLogin}> LOGIN </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center p-1 cursor-pointer" >
              <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-full shadow-sm border-2 border-white flex items-center" onClick={goToUpload}>
                <FaPlus className="mr-1" /> CREATE
              </button>
            </div>
            {currentUser ? (
              <>
                <BadgeIcon
                  icon={<FaShoppingCart className="text-2xl text-white" />}
                  badgeContent={cartQuantity}
                  onClick={() => setIsCartOpen(!isCartOpen)}
                />
                <BadgeIcon
                  icon={<FaInbox className="text-2xl text-white" />}
                  onClick={() => { }}
                />
                <UserDropdown />

              </>
            ) : (
              <>
                <div className="flex items-center p-1 cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)} >
                  <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-full shadow-sm border-2 border-white flex items-center">
                    <FaShoppingCart className="mr-1" /> CART
                    {cartQuantity > 0 && (<div className='px-2 ml-2 text-sm bg-white text-red-500 font-bold rounded-full'>
                      {cartQuantity}
                    </div>)}
                  </button>
                </div>
                <div className="flex items-center p-1 cursor-pointer" >
                  <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-full shadow-sm border-2 border-white flex items-center" onClick={goToLogin}>
                    LOGIN <FaUserCircle className="mx-1" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

      </nav>

      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  )
}

