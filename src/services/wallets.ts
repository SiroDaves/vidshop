import { Wallet } from '../models/wallet';
import { appServer } from "../lib/globals";

export async function fetchWallets() {
  const response = await fetch(`${appServer}wallet`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function fetchWalletById(id: Number) {
  const response = await fetch(`${appServer}wallet/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function createWallet(wallet: Wallet) {
  const response = await fetch(`${appServer}wallet`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wallet)
  });
  if (!response.ok) {
    throw new Error('The server has rejected your request. Fix it and try again.');
  }

  console.log("request", JSON.stringify(wallet));

  const data = await response.json();
  console.log("response", data);
  return data;
}