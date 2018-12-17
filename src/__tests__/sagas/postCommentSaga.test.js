import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
} from '../../actionTypes/articleThreadActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Post comment watcher saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 201,
      message: 'success',
      data: {
        comment: {}
      }
    }
  }));

  it('should execute post comment saga', (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: POST_COMMENT_REQUEST, payload: {} },
      { type: POST_COMMENT_SUCCESS, payload: { comment: {} } }
    ];

    store.dispatch({ type: POST_COMMENT_REQUEST, payload: {} });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
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

    mockAxios.post.mockImplementationOnce(() => Promise.reject({ response }));

    it('should dispatch a failure action', (done) => {
      const store = mockStore({});
      sagaMiddleware.run(rootSaga);

      const expectedActions = [
        { type: POST_COMMENT_REQUEST, payload: {} },
        { type: POST_COMMENT_FAILURE, payload: 'Network Error' }
      ];

      store.dispatch({ type: POST_COMMENT_REQUEST, payload: {} });

      store.subscribe(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
