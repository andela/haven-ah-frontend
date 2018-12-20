import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_FAILURE,
} from '../../actionTypes/followUserActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Follow user saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 201,
      message: 'success',
      data: {}
    }
  }));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: FOLLOW_USER_REQUEST },
      {
        type: FOLLOW_USER_SUCCESS,
        payload: {
          status: 201,
          message: 'success',
          data: {}
        }
      }
    ];

    store.dispatch({ type: FOLLOW_USER_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Unfollow user saga:', () => {
  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
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
      { type: UNFOLLOW_USER_REQUEST },
      {
        type: UNFOLLOW_USER_SUCCESS,
        payload: {
          status: 200,
          message: 'success',
          data: {}
        }
      }
    ];

    store.dispatch({ type: UNFOLLOW_USER_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Follow user saga:', () => {
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
      { type: FOLLOW_USER_REQUEST },
      {
        type: FOLLOW_USER_FAILURE,
        error: {
          message: 'Hey, use the right URL'
        },
      }
    ];

    store.dispatch({ type: FOLLOW_USER_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Unfollow user saga:', () => {
  mockAxios.delete.mockImplementationOnce((error) => {
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
      { type: UNFOLLOW_USER_REQUEST },
      {
        type: UNFOLLOW_USER_FAILURE,
        error: {
          message: 'Hey, use the right URL'
        },
      }
    ];

    store.dispatch({ type: UNFOLLOW_USER_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
