import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/registerActionType';

const initialState = {
  signingUp: false,
  error: '',
  success: '',
  payload: {}
};


const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_REQUEST:
    return { ...state, signingUp: true, payload: action.payload };
  case REGISTER_SUCCESS:
    return { ...state, signingUp: false, success: action.payload };
  case REGISTER_FAILURE:
    return { ...state, signingUp: false, error: action.payload };
  default:
    return state;
  }
};

export default registerReducer;
