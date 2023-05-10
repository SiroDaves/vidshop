import { Profile } from '../models/profile';
import { appServer } from "../lib/globals";

export async function fetchProfiles() {
  const response = await fetch(`${appServer}profile`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function fetchProfileById(id: Number) {
  const response = await fetch(`${appServer}profile/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("response", data);
  return data;
}

export async function createProfile(profile: Profile) {
  const response = await fetch(`${appServer}profile`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile)
  });
  if (!response.ok) {
    throw new Error('The server has rejected your request. Fix it and try again.');
  }

  console.log("request", JSON.stringify(profile));

  const data = await response.json();
  console.log("response", data);
  return data;
}