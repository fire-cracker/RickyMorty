import axios from 'axios';

const API_URL= "https://rickandmortyapi.com/api"

export const getCards = async()  => {
  const response = await axios.get(`${API_URL}/character/`)
  return response
}

export const getOneCard = async(imageId) => {
  const response = await axios.get(`${API_URL}/character/${imageId}`)
  return response
}