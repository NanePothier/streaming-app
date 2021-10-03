import { createStore } from 'redux';

const defaultState = {
  isAuthenticated: false,
  currentUser: '',
};

const storeReducer = (state = defaultState, action) => {
  if (action.type === 'AUTH') {
    return {
      isAuthenticated: action.value.isAuth,
      currentUser: action.value.user,
    };
  }
  return state;
};

const store = createStore(storeReducer);

export default store;
