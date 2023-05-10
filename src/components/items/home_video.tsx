import Link from "next/link"
import Image from "next/image"
import { IoHeart } from "react-icons/io5"
import React, { memo, useEffect, useState } from "react"
import { FaCommentDots, FaShare, FaMusic } from "react-icons/fa"

import { Product } from '../../interfaces/product'
import Video from '../../components/items/video'
import styles from "../../styles/ContentVideo.module.scss"

function HomeVideo({ product }: { product: Product }) {
  const [content, setContent] = useState(product);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <div
      className="flex items-center justify-between py-1 pl-2 m-4 transition-all hover:bg-gray-100 "
      data-testid={`product-item-${product._id}`}
    >
      <div className={styles.suggest_item}>
        <Link href="/">
          <Image className={styles.avatar} src="/images/user.png" alt="" width="50" height="50" />
        </Link>
        <div className={styles.content}>
          <div className={styles.info_containter}>
            <div className={styles.info}>
              <div className={styles.author_container}>
                <div className={styles.author}>
                  <Link href="/">
                    <h3 className={styles.username}> johndoe </h3>
                    <h3 className={styles.name}>John Doe</h3>
                  </Link>
                </div>
              </div>
              <span className={styles.video_desc}>{content.title}</span>
              <h4 className={styles.video_music}>
                <FaMusic className={styles.icon_music} /> Original Audio
              </h4>
            </div>
            <div className={styles.follow_button}>
              FOLLOW
            </div>
          </div>
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
                  {/*<Menu items={MENU_ITEMS_SHARE} right>*/}
                    <div className={styles.icon}>
                      <FaShare />
                    </div>
                  {/*</Menu>*/}
                </div>
                <strong className={styles.count}>{content.views}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  )
}

export default HomeVideo
