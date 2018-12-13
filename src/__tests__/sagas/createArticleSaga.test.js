import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_REQUEST
} from '../../actionTypes/createArticle';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Create article Saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 201,
      data: {
        newArticle: {
          slug: 'dummy-slug'
        }
      }
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: CREATE_ARTICLE_REQUEST },
      { type: CREATE_ARTICLE_SUCCESS, payload: 'dummy-slug' }
    ];

    store.dispatch({ type: CREATE_ARTICLE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });


  describe('Article Thread Saga:', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {
        status: 400,
        message: 'Network failure',
      }
    }));

    it('should dispatch a failure action', async (done) => {
      const store = mockStore({});
      sagaMiddleware.run(rootSaga);

      const expectedActions = [
        { type: CREATE_ARTICLE_REQUEST },
        { type: CREATE_ARTICLE_FAILURE, payload: 'Article could not be posted.' }
      ];

      store.dispatch({ type: CREATE_ARTICLE_REQUEST });

      store.subscribe(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});
