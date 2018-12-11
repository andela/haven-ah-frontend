import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from '../../actionTypes/articleThreadActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Get comments watcher saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {
        comments: []
      }
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

  describe('', () => {
    const response = {
      data: {
        status: 500,
        message: 'Network Error',
        data: {
          message: 'Network Error',
        }
      }
    };

    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response }));

    it('should dispatch a failure action', (done) => {
      const store = mockStore({});
      sagaMiddleware.run(rootSaga);

      const expectedActions = [
        { type: GET_COMMENTS_REQUEST },
        { type: GET_COMMENTS_FAILURE, payload: 'Network Error' }
      ];

      store.dispatch({ type: GET_COMMENTS_REQUEST });

      store.subscribe(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
