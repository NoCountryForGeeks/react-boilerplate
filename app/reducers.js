import { combineReducers } from 'redux';

import state from 'state';

export default combineReducers({ ...state.reducers });
