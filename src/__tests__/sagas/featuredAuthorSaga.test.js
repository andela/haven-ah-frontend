import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  FEATURED_AUTHOR_REQUEST,
  FEATURED_AUTHOR_SUCCESS,
  FEATURED_AUTHOR_FAILURE
} from '../../actionTypes/featuredAuthorActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Featured author Saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      data: {}
    }
  }));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: FEATURED_AUTHOR_REQUEST },
      { type: FEATURED_AUTHOR_SUCCESS, data: {} },
    ];

    store.dispatch({ type: FEATURED_AUTHOR_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
