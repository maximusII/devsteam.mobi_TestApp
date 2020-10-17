import {FETCH_SUCCESS, FETCH_ERROR} from './types';

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_SUCCESS,
    payload: images,
  };
};

export const fetchImagesError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};
