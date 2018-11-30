import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
