import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  ARTICLE_THREAD_REQUEST,
  ARTICLE_THREAD_SUCCESS,
  ARTICLE_THREAD_FAILURE
} from '../../actionTypes/articleThreadActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Single article Saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {}
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: ARTICLE_THREAD_REQUEST },
      { type: ARTICLE_THREAD_SUCCESS, payload: {} }
    ];

    store.dispatch({ type: ARTICLE_THREAD_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });


  describe('Article Thread Saga:', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        status: 400,
        data: {
          message: 'Network Error',
        }
      }
    }));

    it('should dispatch a failure action', async (done) => {
      const store = mockStore({});
      sagaMiddleware.run(rootSaga);

      const expectedActions = [
        { type: ARTICLE_THREAD_REQUEST },
        { type: ARTICLE_THREAD_FAILURE, payload: 'Network Error' }
      ];

      store.dispatch({ type: ARTICLE_THREAD_REQUEST });

      store.subscribe(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
