import Link from "next/link"
import React, { useEffect, useState } from "react"

import Video from '../items/video_grid'
import { Product } from '../../interfaces/product'

function ProfileItem({ product }: { product: Product }) {
  const [content, setContent] = useState(product);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <div className="rounded-lg">
      <Link href="/">
        <Video data={content} />
      </Link>
    </div>
  )
}

export default ProfileItem
