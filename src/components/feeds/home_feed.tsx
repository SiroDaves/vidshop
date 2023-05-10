import { Link } from 'react-router-dom'

import { Product } from '../../interfaces/product'
import HomeVideo from '../../components/items/home_video'

interface ProductsListProps {
  products?: Product[]
}
function HomeFeed({ products }: ProductsListProps): any {
  return products?.map((product: Product) => (
    <div className="" key={product._id}>
      {/*<Link to={`/products/${product._id}`}>*/}
        <HomeVideo product={product} />
      {/*</div></Link>*/}
    </div>
  ))
}

export default HomeFeed
