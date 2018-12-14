import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../../actionTypes/reactionActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Like saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {
        reactionType: 'Like'
      }
    }
  }));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: LIKE_REQUEST },
      {
        type: LIKE_SUCCESS,
        payload: {
          status: 200,
          message: 'success',
          data: {
            reactionType: 'Like'
          }
        }
      }
    ];

    store.dispatch({ type: LIKE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Love article saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {
        reactionType: 'Love'
      },
    }
  }));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: LOVE_REQUEST },
      {
        type: LOVE_SUCCESS,
        payload: {
          status: 200,
          message: 'success',
          data: {
            reactionType: 'Love'
          },
        }
      }
    ];

    store.dispatch({ type: LOVE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Like saga failure:', () => {
  mockAxios.post.mockImplementationOnce((error) => {
    error = {
      response: {
        status: 400,
        message: 'Bad Request',
        data: {
          message: 'Hey, use the right URL'
        }
      }
    };
    return Promise.reject(error);
  });

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: LIKE_REQUEST },
      {
        type: LIKE_FAILURE,
        error: {
          message: 'Hey, use the right URL'
        },
      }
    ];

    store.dispatch({ type: LIKE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Love article saga failure:', () => {
  mockAxios.post.mockImplementationOnce((error) => {
    error = {
      response: {
        status: 400,
        message: 'Bad Request',
        data: {
          message: 'Hey, use the right URL'
        }
      }
    };
    return Promise.reject(error);
  });

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: LOVE_REQUEST },
      {
        type: LOVE_FAILURE,
        error: {
          message: 'Hey, use the right URL'
        }
      }
    ];

    store.dispatch({ type: LOVE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
