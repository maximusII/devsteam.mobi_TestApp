import {fetchImagesSuccess, fetchImagesError} from './actions';

const fetchImages = () => (dispatch) => {
  fetch('https://api.unsplash.com/photos?per_page=30', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Client-ID t4o7W4kwd5UfBG-Nenycl7sk_uS5G4mVJsQ6_RblbCM',
    },
  })
    .then((response) => response.json())
    .then((images) => {
      dispatch(fetchImagesSuccess(images));
    })
    .catch((error) => dispatch(fetchImagesError(error)));
};

export default fetchImages;
