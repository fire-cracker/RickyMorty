import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL= process.env.REACT_APP_API_URL

export const getCards = async()  => {
  const response = await axios.get(`${API_URL}/character/`)
  return response
}

export const getOneCard = async(imageId) => {
  const response = await axios.get(`${API_URL}/character/${imageId}`)
  return response
}