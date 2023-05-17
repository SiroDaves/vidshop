import Link from "next/link"
import Image from "next/image"
import { IoHeart } from "react-icons/io5"
import React, { useEffect, useState } from "react"
import { FaCommentDots, FaShare, FaMusic } from "react-icons/fa"

import { Product } from '../../interfaces/product'
import Video from './product_video'
import styles from '@/styles/Video.module.scss'
import { formatCurrency } from '@/utils/formatCurrency'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { Button } from "antd"

function ProductItem({ product }: { product: Product }) {
  const [content, setContent] = useState(product);

  useEffect(() => {
    setContent(content);
  }, [content]);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(product)
  const id = product._id

  return (
    <div className="mt-3">
      {/* user user action */}
      <div className="flex flex-wrap">

        {/* user info */}
        <div className="flex-grow">
          <div className="flex flex-wrap">

            {/* user avatar */}
            <Image className="rounded-full mx-2" src="/images/user.png" alt="" width="50" height="50" />
            <div className="flex-grow">
              <Link href="/" className="flex-grow">
                <h3 className="text-bold">johndoe</h3>
                <h3 className="">John Doe</h3>
              </Link>
            </div>
          </div>
        </div>

        {/* user follow button */}
        <button className="px-4 py-2 mx-2 font-semibold text-sm bg-sky-500 text-white rounded shadow-sm h-8">
          FOLLOW
        </button>
      </div>

      <span className="ml-16">{content.title}</span>
      {/*<div className='mt-auto'>
        {quantity === 0 ? (
          <Button className='w-100' onClick={() => increaseCartQuantity(product)}>
            + Add To Cart
          </Button>
        ) : (
          <div
            className='d-flex align-items-center flex-column'
            style={{ gap: '.5rem' }}
          >
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ gap: '.5rem' }}
            >
              <Button onClick={() => decreaseCartQuantity(product)}>-</Button>
              <div>
                <span className='fs-3'>{quantity} </span>
                in cart
              </div>
              <Button onClick={() => increaseCartQuantity(product)}>+</Button>
            </div>
            <Button
              onClick={() => removeFromCart(product)}
            >
              Remove
            </Button>
          </div>
        )}
        </div>*/}
        
      {/* video */}
      <div className="mx-auto">

        <div className={styles.video_wrapper}>
          <Link href="/">
            <div className={styles.video_card}>
              <Video data={content} />
            </div>
          </Link>
          <div className={styles.action_items}>
            <div className={styles.action_button}>
              <div className={styles.icon} >
                <IoHeart />
              </div>
              <strong className={styles.count}>{content.likes}</strong>
            </div>

            <Link href="#" >
              <div className={styles.action_button}>
                <div className={styles.icon}>
                  <FaCommentDots />
                </div>
                <strong className={styles.count}>
                  {content.comments}
                </strong>
              </div>
            </Link>

            <div className={styles.action_button}>
              <div className={styles.menu_share}>
                <div className={styles.icon}>
                  <FaShare />
                </div>
              </div>
              <strong className={styles.count}>{content.views}</strong>
            </div>
          </div>
        </div>

      </div>
      <hr className="border-t border-gray-300 my-8" />
    </div>


  )
}

export default ProductItem
