import { createStore } from 'redux';
import { profileReducer } from './profile/reduser';

export const store = createStore(
  profileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
