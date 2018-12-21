import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from '../actionTypes/searchActionTypes';

export const searchRequestAction = payload => ({
  type: SEARCH_REQUEST,
  payload,
});

export const searchSuccessAction = payload => ({
  type: SEARCH_SUCCESS,
  payload,
});

export const searchFailureAction = payload => ({
  type: SEARCH_FAILURE,
  payload,
});
