import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  TRENDING_ARTICLES_REQUEST,
  TRENDING_ARTICLES_SUCCESS,
} from '../../actionTypes/trendingActionType';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Trending Articles Saga:', () => {
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
      { type: TRENDING_ARTICLES_REQUEST },
      { type: TRENDING_ARTICLES_SUCCESS, articles: undefined }
    ];

    store.dispatch({ type: TRENDING_ARTICLES_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
