import { combineReducers } from 'redux';
import user from './user/reducer';

const appReducer = combineReducers({
  user
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;