import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './reducer';

const rootReducer = combineReducers({
  images: imagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
