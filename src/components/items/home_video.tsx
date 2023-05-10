import React, { memo, useEffect, useState } from "react";
import { Product } from '../../interfaces/product'
import Video from '../../components/items/video'
import styles from "../../styles/ContentVideo.module.scss";

function HomeVideo({ product }: { product: Product }) {
  const [content, setContent] = useState(product);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <div
      className="flex items-center justify-between py-1 pl-2 m-4 transition-all bg-gray-200 hover:bg-gray-100 "
      data-testid={`product-item-${product._id}`}
    >
      <div className={styles.suggest_item}>
        <div className={styles.content}>
          <div className={styles.info_containter}>

          </div>
          <div className={styles.video_wrapper}>
            <div className={styles.video_card}>
              <Video data={content} />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  )
}

export default HomeVideo
