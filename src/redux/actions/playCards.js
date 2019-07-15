import axios from 'axios';
import dotenv from 'dotenv';
import {GET_CARDS_REQUEST, GET_CARDS_SUCCESS} from './actionTypes';

dotenv.config();

const API_URL= process.env.REACT_APP_API_URL

export const getCardsRequest = () => ({
  type: GET_CARDS_REQUEST
})

export const getCardsSuccess = (data) => ({
  type: GET_CARDS_SUCCESS,
  data
})

export const getCards = () => async(dispatch) => {
  dispatch(getCardsRequest())
  const response = await axios.get(`${API_URL}/character/?page=2`, {"count": 394,"pages": 20})
  console.log(response)
  const data = response.data
  dispatch(getCardsSuccess(data));
}