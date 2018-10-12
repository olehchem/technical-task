import axios from 'axios';

export const PHONE_FETCHING = 'PHONE_FETCHING';
export const PHONE_FETCHING_ERROR = 'PHONE_FETCHING_ERROR';
export const PHONE_FETCHING_SUCCESS = 'PHONE_FETCHING_SUCCESS';

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
  return (dispatch, getState, { endpoints }) => {
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
