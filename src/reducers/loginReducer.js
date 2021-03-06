import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionTypes/loginActionType';

const initialState = {
  loggingIn: false,
  error: '',
  token: '',
  payload: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...state, loggingIn: true, payload: action.payload };
  case LOGIN_SUCCESS:
    return {
      ...state, loggingIn: false, token: action.payload, error: ''
    };
  case LOGIN_FAILURE:
    return {
      ...state, loggingIn: false, token: '', error: action.payload
    };
  default:
    return state;
  }
};

export default loginReducer;
