import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  GET_COMMENT_HISTORY,
  COMMENT_HISTORY_SUCCESS,
  COMMENT_HISTORY_FAILURE
} from '../../actionTypes/commentHistoryActionTypes';


const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Get comments watcher saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {
        editHistory: []
      }
    }
  }));

  it('should execute get comment history saga', () => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_COMMENT_HISTORY, payload: { slug: 'slug', commentId: 5 } },
      { type: COMMENT_HISTORY_SUCCESS, payload: [] }
    ];

    store.dispatch({
      type: GET_COMMENT_HISTORY, payload: { slug: 'slug', commentId: 5 }
    });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('should dispatch a failure action', (done) => {
    const response = {
      data: {
        status: 500,
        message: 'Network Error',
      }
    };

    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response }));

    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_COMMENT_HISTORY, payload: { slug: 'slug', commentId: 5 } },
      { type: COMMENT_HISTORY_FAILURE, payload: 'Network Error' }
    ];

    store.dispatch({
      type: GET_COMMENT_HISTORY, payload: { slug: 'slug', commentId: 5 }
    });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
