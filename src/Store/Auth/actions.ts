import {createAction} from 'redux-actions';
import * as types from './constants';

export const login = createAction(types.LOGIN_REQUEST);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginFailue = createAction(types.LOGIN_FAILURE);
