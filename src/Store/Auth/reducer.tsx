import createReducer from '../../Utils/createReducer';
import * as types from './constants';

const initialState = {
  isFetching: false,
  user: null,
};

export const authRequest = (state: any, action: any) => {
  state.isFetchingAuth = true;
};
export const authSuccess = (state: any, action: any) => {
  state.isFetchingAuth = false;
  state.user = action.payload;
};
export const authFailure = (state: any, action: any) => {
  state.isFetchingAuth = false;
};

export default createReducer(initialState, {
  [types.LOGIN_REQUEST]: authRequest,
  [types.LOGIN_SUCCESS]: authSuccess,
  [types.LOGIN_FAILURE]: authFailure,
});
