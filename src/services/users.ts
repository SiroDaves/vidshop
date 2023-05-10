import { User } from '../models/user';
import { appServer } from "../lib/globals";

export async function fetchUsers() {
  const response = await fetch(`${appServer}user`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function fetchUserById(id: Number) {
  const response = await fetch(`${appServer}user/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function createUser(user: User) {
  const response = await fetch(`${appServer}user`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error('The server has rejected your request. Fix it and try again.');
  }

  console.log("request", JSON.stringify(user));

  const data = await response.json();
  console.log("response", data);
  return data;
}