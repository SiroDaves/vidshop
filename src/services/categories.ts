import { Category } from '../models/category';
import { appServer } from "../lib/globals";

export async function fetchCategories() {
  const response = await fetch(`${appServer}category`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function fetchCategoryById(id: Number) {
  const response = await fetch(`${appServer}category/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function createCategory(category: Category) {
  const response = await fetch(`${appServer}category`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category)
  });
  if (!response.ok) {
    throw new Error('The server has rejected your request. Fix it and try again.');
  }

  console.log("request", JSON.stringify(category));

  const data = await response.json();
  console.log("response", data);
  return data;
}