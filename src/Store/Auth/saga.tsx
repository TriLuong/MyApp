import {put, takeLatest} from 'redux-saga/effects';
import {AnyAction} from 'redux';
// import {loginRequest} from '../../Models/Auth';
import * as types from './constants';
import * as actions from './actions';

function* authRequest({payload}: AnyAction) {
  try {
    console.log('saga');
    yield put(actions.loginSuccess(payload));
  } catch (error) {
    yield put(actions.loginFailue(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, authRequest);
}
