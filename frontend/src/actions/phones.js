import axios from 'axios';
import endpoints from '../api';

export const PHONE_FETCHING = 'PHONE_FETCHING';
export const PHONE_FETCHING_ERROR = 'PHONE_FETCHING_ERROR';
export const PHONE_FETCHING_SUCCESS = 'PHONE_FETCHING_SUCCESS';

export const SELECT_PHONE = 'SELECT_PHONE';

export function phoneFetching() {
  return {
    type: PHONE_FETCHING,
  };
}

export function phoneFetchingError() {
  return {
    type: PHONE_FETCHING_ERROR,
  };
}

export function phoneFetchingSuccess(phones) {
  return {
    type: PHONE_FETCHING_SUCCESS,
    payload: {
      phones,
    },
  };
}

export function fetchPhones() {
  return (dispatch) => {
    dispatch(phoneFetching());

    return axios(endpoints.phones)
      .then((response) => {
        dispatch(phoneFetchingSuccess(response.data));
      })
      .catch(() => {
        dispatch(phoneFetchingError());
      });
  };
}

export function selectPhone(id) {
  return {
    type: SELECT_PHONE,
    payload: { id },
  };
}
