import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../../actionTypes/userProfileActionType';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('User profile Saga:', () => {
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
      { type: USER_PROFILE_REQUEST },
      { type: USER_PROFILE_SUCCESS, payload: {} }
    ];

    store.dispatch({ type: USER_PROFILE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
