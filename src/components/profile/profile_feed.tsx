import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

import ProfileItem from './profile_item'
import { Product } from '@/interfaces/product'
import { useShoppingCart } from '@/context/ShoppingCartContext'

interface ProductsListProps {
  products?: Product[]
}

function ProfileFeed({ products }: ProductsListProps): any {
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

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-2">
      {products?.map((product: Product) => (
        <div className="bg-gray-200" key={product._id}>
          <ProfileItem product={product} />
        </div>
      ))}
    </div>
  )
  
}

export default ProfileFeed