import {
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
  CONFIRM_TOKEN_FAILURE,
  CONFIRM_TOKEN_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  CLEAR_UPDATE_MESSAGE
} from '../actionTypes/passwordReset';

const initialState = {
  resetSuccess: false,
  emailSuccess: false,
  confirmSuccess: false,
  updateSuccess: false,
  error: null,
};


const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
  case PASSWORD_RESET_REQUEST_SUCCESS:
    return { ...state, emailSuccess: true };
  case PASSWORD_RESET_REQUEST_FAILURE:
    return { ...state, error: action.payload };
  case CONFIRM_TOKEN_SUCCESS:
    return { ...state, confirmSuccess: true };
  case CONFIRM_TOKEN_FAILURE:
    return { ...state, error: action.payload };
  case UPDATE_PASSWORD_SUCCESS:
    return { ...state, updateSuccess: true };
  case UPDATE_PASSWORD_FAILURE:
    return { ...state, error: action.payload };
  case CLEAR_UPDATE_MESSAGE:
    return { ...state, updateSuccess: false };
  default:
    return state;
  }
};

export default resetPasswordReducer;
