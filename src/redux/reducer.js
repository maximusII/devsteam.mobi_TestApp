import {FETCH_SUCCESS, FETCH_ERROR} from './types';

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default imagesReducer;
