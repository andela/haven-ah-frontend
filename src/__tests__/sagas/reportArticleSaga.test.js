import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  REPORT_ARTICLE_REQUEST,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE
} from '../../actionTypes/reportArticleActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Report article saga:', () => {
  const requestAction = {
    type: REPORT_ARTICLE_REQUEST,
    payload: { slug: 'slug', complaintBody: {} }
  };

  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {}
    }
  }));

  it('should execute get comments saga', () => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      requestAction,
      { type: REPORT_ARTICLE_SUCCESS, payload: 'success' }
    ];

    store.dispatch(requestAction);

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  describe('Failure ', () => {
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
        requestAction,
        { type: REPORT_ARTICLE_FAILURE, payload: 'Network Error' }
      ];

      store.dispatch(requestAction);

      store.subscribe(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
