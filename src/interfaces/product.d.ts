
export interface CartItem {
  product: Product
  quantity: number
}

export interface Product {
  _id: string;
  id: number;
  sku: number;
  userid: number;
  categoryid: string;
  title: string;
  description: string;
  thumb_url: string;
  file_url: string;
  features: string;
  price: number;
  discount: number;
  likes: number;
  comments: number;
  views: number;
  viewable: string;
  commentable: boolean;
  created_at: string;
  __v: number;
}

export interface Meta {
  file_size: number;
  file_format: string;
  mime_type: string;
  playtime_string: string;
  playtime_seconds: number;
  bitrate: number;
}

