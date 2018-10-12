import { PHONE_FETCHING, PHONE_FETCHING_SUCCESS, PHONE_FETCHING_ERROR } from '../actions';

const initialState = {
  list: null,
  activePhoneId: null,
  isFetching: false,
  isFetchingError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_FETCHING:
      return {
        ...state,
        isFetching: true,
        isFetchingError: false,
      };
    case PHONE_FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetchingError: true,
        list: action.payload.phones,
      };
    case PHONE_FETCHING_ERROR:
      return {
        ...state,
        list: null,
        isFetching: false,
        isFetchingError: true,
      };

    default:
      return state;
  }
};
