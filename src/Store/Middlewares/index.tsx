import {all} from 'redux-saga/effects';
// import {Saga} from 'redux-saga/index';
import authSagas from '../Auth/saga';
// import middlewareSagas from './sagas';

export default () => {
  function* rootSaga() {
    yield all([...authSagas]);
  }
  return rootSaga;
};
