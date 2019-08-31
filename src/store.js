import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { all } from 'redux-saga/effects';

import weatherReducer from './weather/reducer';
import weatherSagas from './weather/sagas';

const rootReducer = combineReducers({
  weather: weatherReducer,
});
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, thunk]
const rootSagas = function* rootSagas() {
  yield all([
    weatherSagas(),
  ]);
}


const configureStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSagas);

export default configureStore;

