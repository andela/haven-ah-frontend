import {
  FEATURED_AUTHOR_REQUEST,
  FEATURED_AUTHOR_SUCCESS,
  FEATURED_AUTHOR_FAILURE
} from '../actionTypes/featuredAuthorActionTypes';

export const fetchFeaturedAuthor = () => ({
  type: FEATURED_AUTHOR_REQUEST
});

export const featuredAuthorSuccess = data => ({
  type: FEATURED_AUTHOR_SUCCESS,
  data,
});

export const featuredAuthorFailure = error => ({
  type: FEATURED_AUTHOR_FAILURE,
  error,
});
