import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  RECENT_ARTICLES_REQUEST,
  RECENT_ARTICLES_SUCCESS
} from '../../actionTypes/recentArticlesType';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Recent article Saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      data: {
        message: 'success',
        rows: {}
      }
    }
  }));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: RECENT_ARTICLES_REQUEST },
      { type: RECENT_ARTICLES_SUCCESS, articles: {} }
    ];

    store.dispatch({ type: RECENT_ARTICLES_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
