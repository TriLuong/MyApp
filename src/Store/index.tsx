import {
  persistStore,
  persistCombineReducers,
  persistReducer,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import Reactotron from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';
import createSaga from './Middlewares';
import authReducer from './Auth/reducer';
import userReducer from './User/reducer';
import * as authActions from './Auth/actions';

import '../Utils/ReactotronConfig';
// import commonReducer from './common/reducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['common', 'authReducer'],
};

const eventReducerConfig = {
  key: 'eventStore',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
  blacklist: ['common', 'authReducer'],
};

const createReducers = () =>
  persistCombineReducers(config, {
    // accounts: accountsReducer,

    authReducer,
    accounts: persistReducer(eventReducerConfig, userReducer),
  });

const createMiddlewares = (sagaMiddleware: any) => {
  const middlewares = [];

  // Saga Middleware
  if (sagaMiddleware) {
    middlewares.push(sagaMiddleware);
  }
  return applyMiddleware.apply({}, middlewares);
};

const buildStore = (reducers, initialState) => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  if (__DEV__) {
    // eslint-disable-line
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      store = createStore(
        reducers,
        {},
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
          compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
        ),
      );
    } else {
      store = createStore(
        createReducers(reducers),
        {},
        compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
      );
    }
  } else {
    store = createStore(
      createReducers(reducers),
      initialState,
      compose(createMiddlewares(sagaMiddleware)),
    );
  }

  const persistor = persistStore(store);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(createReducers(reducers));
    });
  }
  store.reducers = createReducers(reducers);
  sagaMiddleware.run(createSaga());
  return {persistor, store};
};

export default buildStore();
export const actions = {
  ...authActions,
  // ...commonActions,
  // ...userActions,
  // ...blogsActions,
  // ...exercisesActions,
  // ...mealsActions,
  // ...foodActions,
  // ...medicationActions,
  // ...waterActions,
  // ...weightActions,
  // ...heartRateAction,
  // ...sleepAction,
  // ...middlewares,
  // ...homeAction,
};

// export {default as effects} from './middlewares/effects';
