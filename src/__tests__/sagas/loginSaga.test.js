import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../../actionTypes/loginActionType';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Login saga', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      data: {
        token: ''
      }
    }
  }));

  it('should dispatch the login request action', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: LOGIN_REQUEST, payload: {} },
      { type: LOGIN_SUCCESS, payload: '' },
    ];

    store.dispatch({ type: LOGIN_REQUEST, payload: {} });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
