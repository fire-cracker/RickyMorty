/* eslint-disable default-case */
import {GET_CARDS_REQUEST, GET_CARDS_SUCCESS} from '../actions/actionTypes';

const playCards = [];

const playCardsReducer = (state=playCards, action) => {
  switch(action.type) {
    case GET_CARDS_REQUEST:
      return {...state}

    case GET_CARDS_SUCCESS:
    const { data: {results}} = action;
      return {
        ...state,
        playCards: results
        }
    
    default:
      return state
  }
}
export default playCardsReducer;