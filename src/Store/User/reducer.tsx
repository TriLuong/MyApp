import createReducer from '../../Utils/createReducer';
import * as types from '../Auth/constants';

const initialState = {
  token: '',
};

export const authSuccess = (state: any, action: any) => {
  state.token = 'TOKEN 12314';
};

export default createReducer(initialState, {
  [types.LOGIN_SUCCESS]: authSuccess,
});
