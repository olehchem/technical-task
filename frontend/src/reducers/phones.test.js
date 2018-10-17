import reducer from '.';
import * as actions from '../actions';
import utils from '../testUitls';

describe('phones reducer', () => {
  const INITIAL_STATE = {
    list: null,
    activePhoneId: null,
    isFetching: false,
    isFetchingError: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {}).phones).toEqual(INITIAL_STATE);
  });

  it('should handle PHONE_FETCHING action', () => {
    const expectedResult = {
      ...INITIAL_STATE,
      isFetching: true,
    };
    const action = {
      type: actions.PHONE_FETCHING,
    };

    expect(reducer(INITIAL_STATE, action).phones).toEqual(expectedResult);
  });

  it('should handle PHONE_FETCHING action', () => {
    const expectedResult = {
      ...INITIAL_STATE,
      isFetching: false,
      isFetchingError: true,
    };
    const action = {
      type: actions.PHONE_FETCHING_ERROR,
    };

    expect(reducer(INITIAL_STATE, action).phones).toEqual(expectedResult);
  });

  it('should handle PHONE_FETCHING_SUCCESS action', () => {
    const expectedResult = {
      ...INITIAL_STATE,
      list: utils.phones,
      isFetching: false,
      isFetchingError: true,
    };
    const action = {
      type: actions.PHONE_FETCHING_SUCCESS,
      payload: { phones: utils.phones },
    };

    expect(reducer(INITIAL_STATE, action).phones).toEqual(expectedResult);
  });

  it('should handle SELECT_PHONE action', () => {
    const fakeId = 'fakeId';

    const expectedResult = {
      ...INITIAL_STATE,
      activePhoneId: fakeId,
    };
    const action = {
      type: actions.SELECT_PHONE,
      payload: { id: fakeId },
    };

    expect(reducer(INITIAL_STATE, action).phones).toEqual(expectedResult);
  });
});
