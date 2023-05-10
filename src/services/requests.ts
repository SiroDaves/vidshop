import axios from 'axios'
import { Album, Photo, User } from '../interfaces/typings'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const fetchAllAlbums = async () => {
  const { data } = await axios.get<Album[]>(`${BASE_URL}/albums`)
  return data
}

const fetchUserAlbums = async (userId?: string) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}/albums`)
  return data
}

const fetchUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`)
  return data
}

const fetchUser = async (id?: string) => {
  const { data } = await axios.get<User>(`${BASE_URL}/users/${id}`)
  return data
}
const fetchAlbum = async (albumId?: string) => {
  const { data } = await axios.get<Album>(`${BASE_URL}/albums/${albumId}`)
  return data
}

const fetchAlbumPhotos = async (albumId?: string) => {
  const { data } = await axios.get<Photo[]>(
    `${BASE_URL}/albums/${albumId}/photos`
  )
  return data
}

const fetchPhoto = async (photoId?: string) => {
  const { data } = await axios.get<Photo>(`${BASE_URL}/photos/${photoId}`)
  return data
}

const fetchAllPhotos = async () => {
  const { data } = await axios.get<Photo[]>(`${BASE_URL}/photos`)
  return data
}

const updatePhotoTitle = async (photoDetails: Photo) => {
  const { data } = await axios.put(`${BASE_URL}/photos/${photoDetails.id}`, {
    photoDetails,
  })
  return data
}

export {
  fetchUsers,
  fetchUser,
  fetchAllAlbums,
  fetchUserAlbums,
  fetchAlbum,
  fetchAlbumPhotos,
  fetchAllPhotos,
  fetchPhoto,
  updatePhotoTitle,
}
