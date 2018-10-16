import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import endpoints from '../api';

import {
  PHONE_FETCHING,
  PHONE_FETCHING_ERROR,
  PHONE_FETCHING_SUCCESS,
  phoneFetching,
  SELECT_PHONE,
  phoneFetchingError,
  phoneFetchingSuccess,
  selectPhone,
  fetchPhones,
} from './phones';

const middlewares = [thunk];
const axiosMock = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

describe('Phones actions', () => {
  const PHONES = [{ title: 'test', description: 'Lorem' }];

  afterEach(() => {
    axiosMock.reset();
  });

  it('should create an action to start phone fetching', () => {
    const expectedResult = {
      type: PHONE_FETCHING,
    };

    expect(phoneFetching()).toEqual(expectedResult);
  });

  it('should create an action when phone fetching failed', () => {
    const expectedResult = {
      type: PHONE_FETCHING_ERROR,
    };

    expect(phoneFetchingError()).toEqual(expectedResult);
  });

  it('should create an action when phone fetching completed successfully with empty phones list', () => {
    const expectedResult = {
      type: PHONE_FETCHING_SUCCESS,
      payload: { phones: [] },
    };

    expect(phoneFetchingSuccess([])).toEqual(expectedResult);
  });

  it('should create an action when phone fetching completed successfully with not empty phones list', () => {
    const expectedResult = {
      type: PHONE_FETCHING_SUCCESS,
      payload: { phones: PHONES },
    };

    expect(phoneFetchingSuccess(PHONES)).toEqual(expectedResult);
  });

  it('should fetch phones and create a success action', () => {
    const expectedResult = [
      { type: PHONE_FETCHING },
      {
        type: PHONE_FETCHING_SUCCESS,
        payload: { phones: PHONES },
      },
    ];

    axiosMock.onGet(endpoints.phones).reply(200, PHONES);

    const store = mockStore({});

    return store.dispatch(fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should fetch phones and create a failed action', () => {
    const expectedResult = [
      { type: PHONE_FETCHING },
      {
        type: PHONE_FETCHING_ERROR,
      },
    ];

    axiosMock.onGet(endpoints.phones).reply(500);

    const store = mockStore({});

    return store.dispatch(fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should select phone with specific id', () => {
    const id = 'fakeId';

    const expectedResult = {
      type: SELECT_PHONE,
      payload: { id },
    };

    expect(selectPhone(id)).toEqual(expectedResult);
  });
});
