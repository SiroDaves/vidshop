import { Button, Modal as AntModal } from 'antd'
import React, { useState } from "react"

import { Product } from '@/interfaces/product'
import HomeVideo from '@/components/items/home_video'

interface ProductsListProps {
  products?: Product[]
}

function HomeFeed({ products }: ProductsListProps): any {
  const [setProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleItemClick = (product: Product) => {
    setSelectedProduct(product);
    
    setIsModalVisible(true);
  };

  return products?.map((product: Product) => (
    <>
      <AntModal
        title={setProduct?.title}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Buy {setProduct?.title} at Ksh. {setProduct?.price}?</p>
      </AntModal>

      <div className="" key={product._id} onClick={() => handleItemClick(product)}>
        <HomeVideo product={product} />
      </div>
    </>
  ))
}

export default HomeFeed
