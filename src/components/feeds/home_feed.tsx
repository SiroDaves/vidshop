import { Button, Modal as AntModal } from 'antd'
import React, { useState } from "react"

import { Modal } from '@/utils/modal_utils'
import { Product } from '@/interfaces/product'
import HomeVideo from '@/components/items/home_video'
import { ConfirmationModal } from '@/utils/confirm_modal_utils'
import { useWindowDimensions } from '@/hooks/useWindowsDimensions'

interface ProductsListProps {
  products?: Product[]
}

function HomeFeed({ products }: ProductsListProps): any {
  const [setProduct, setSelectedProduct] = useState<Product | null>(null);
  const dimensions = useWindowDimensions();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleItemClick = (product: Product) => {
    setSelectedProduct(product);
    console.log(`${product.title} selected`);
    openConfirmationModal();
  };

  const openConfirmationModal = () => {
    ConfirmationModal({
      onOkay: () => {
        // console.log("handle onKay...");
      },
    });
  };
  const openModalAndBottomSheet = () => {
    Modal.open({
      title: "Modal Title",
      enableBottomSheet: dimensions.width < 640,
      //component: HelloWorld,
      fullScreen: true,
      props: {
        message: "",
        callback: () => {
          //closes the modal
          Modal.close();
        },
        enableBottomSheet: dimensions.width < 640,
      },
    });
  };

  const openBuyingModal = () => {
    ConfirmationModal({
      title: setProduct?.title,
      //message: `Buy ${setProduct?.title} at Kshs. ${setProduct?.price}?`,
      okayLabel: 'Buy Now?',
      onOkay: () => {
        //console.log("handle onKay...");
      },
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={openModalAndBottomSheet}>
        Open Modal general approach
      </Button>

      <AntModal
        title="Basic Modal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Modal data...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

      <Button type="primary" onClick={showModal}>
        Open Modal general approach
      </Button>
      </AntModal>
    </div>
  )

  return products?.map((product: Product) => (
    <div className="" key={product._id} onClick={() => handleItemClick(product)}>
      <HomeVideo product={product} />
    </div>
  ))
}

export default HomeFeed
