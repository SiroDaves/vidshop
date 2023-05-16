import React, { useState } from 'react'
import { Button, Modal, Space } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

import { Product } from '@/interfaces/product'
import HomeVideo from '@/components/items/home_video'

interface ProductsListProps {
  products?: Product[]
}

function HomeFeed({ products }: ProductsListProps) {
  const [setProduct, setSelectedProduct] = useState<Product | null>(null);

  const { confirm } = Modal;

  const handleItemClick = (product: Product) => {
    setSelectedProduct(product);
    confirm({
      title: product.title,
      icon: <ExclamationCircleFilled />,
      content: `Buy ${product?.title} at Ksh. ${product?.price}?`,
      okText: 'Buy Now?',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  return products?.map((product: Product) => (
    <>

      <div className="" key={product._id} onClick={() => handleItemClick(product)}>
        <HomeVideo product={product} />
      </div>
    </>
  ))
}

export default HomeFeed
