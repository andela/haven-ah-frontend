import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
} from '../../actionTypes/articleThreadActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Get comments watcher saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: []
    }
  }));

  it('should execute get comments saga', () => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_COMMENTS_REQUEST, payload: 'slug' },
      { type: GET_COMMENTS_SUCCESS, payload: [] }
    ];

    store.dispatch({ type: GET_COMMENTS_REQUEST, payload: 'slug' });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
