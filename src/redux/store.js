import { createStore } from 'redux';

import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  return import('redux-devtools-extension').then(({ composeWithDevTools }) => {
    const store = createStore(
      rootReducer(),
      initialState,
      composeWithDevTools(),
    );

    return store;
  });
};

export default configureStore;