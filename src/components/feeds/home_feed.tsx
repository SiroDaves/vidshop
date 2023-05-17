import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

import { Product } from '@/interfaces/product'
import ProductItem from '@/components/items/product_item'
import { useShoppingCart } from '@/context/ShoppingCartContext'

interface ProductsListProps {
  products?: Product[]
}

function HomeFeed({ products }: ProductsListProps): any  {
  const { confirm } = Modal;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const handleItemClick = (product: Product) => {
    const buttons = '<div>`Buy ${product?.title} at Ksh. ${product?.price}?`</div>';

    confirm({
      title: product.title,
      icon: <ExclamationCircleFilled />,
      content: `Buy ${product?.title} at Ksh. ${product?.price}?`,
      okText: 'Buy Now?',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          increaseCartQuantity(product);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  };

  return products?.map((product: Product) => (
    <div className="" key={product._id} onClick={() => handleItemClick(product)}>
      <ProductItem product={product} />
    </div>
  ))
}

export default HomeFeed