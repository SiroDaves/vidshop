import axios from 'axios'

import { appServer } from "../lib/globals"
import { Product } from '../interfaces/product'
import { IGetProductsResponse } from '../interfaces/cart'

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = await axios.get(
    'https://react-shopping-cart-67954.firebaseio.com/products.json'
  );

  const { products } = response.data || [];

  return products;
};

export const fetchProducts = async () => {
  const { data } = await axios.get<Product[]>(`${appServer}product`)
  return data
}

export async function fetchProductsx() {
  const response = await fetch(`${appServer}product`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function fetchProductById(id: Number) {
  const response = await fetch(`${appServer}product/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function createProduct(product: Product) {
  const response = await fetch(`${appServer}product`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error('The server has rejected your request. Fix it and try again.');
  }

  console.log("request", JSON.stringify(product));

  const data = await response.json();
  console.log("response", data);
  return data;
}