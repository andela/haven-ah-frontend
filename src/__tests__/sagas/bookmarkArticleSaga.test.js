import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';
import {
  BOOKMARK_ARTICLE_REQUEST,
  BOOKMARK_ARTICLE_SUCCESS,
  UNBOOKMARK_ARTICLE_REQUEST,
  UNBOOKMARK_ARTICLE_SUCCESS,
} from '../../actionTypes/bookmarkArticleActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Bookmark saga', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 201,
      data: 'success'
    }
  }));

  it('should dispatch the bookmark article request action', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: BOOKMARK_ARTICLE_REQUEST, slug: 'slug' },
      {
        type: BOOKMARK_ARTICLE_SUCCESS,
        payload: {
          status: 201,
          data: 'success'
        }
      },
    ];

    store.dispatch({ type: BOOKMARK_ARTICLE_REQUEST, slug: 'slug' });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Unbookmark saga', () => {
  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 202,
      data: 'success'
    }
  }));

  it('should dispatch the unbookmark article request action', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: UNBOOKMARK_ARTICLE_REQUEST, payload: { slug: 'slug' } },
      {
        type: UNBOOKMARK_ARTICLE_SUCCESS,
        payload: {
          status: 202,
          data: 'success'
        }
      },
    ];

    store.dispatch({
      type: UNBOOKMARK_ARTICLE_REQUEST,
      payload: { slug: 'slug' }
    });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
