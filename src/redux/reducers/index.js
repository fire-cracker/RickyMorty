import { combineReducers } from 'redux';

import playCardsReducer from './playCards';

export default combineReducers({
  playCards: playCardsReducer
})