import Link from "next/link"

import { Product } from '../../interfaces/product'
import HomeVideo from '../../components/items/home_video'

interface ProductsListProps {
  products?: Product[]
}
function HomeFeed({ products }: ProductsListProps): any {
  return products?.map((product: Product) => (
    <div className="" key={product._id}>
      <HomeVideo product={product} />
    </div>
  ))
}

export default HomeFeed
