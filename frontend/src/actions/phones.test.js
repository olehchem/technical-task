import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import endpoints from '../api';

import * as actions from './phones';

import utils from '../testUitls';

const middlewares = [thunk];
const axiosMock = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

describe('Phones actions', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should create an action to start phone fetching', () => {
    const expectedResult = {
      type: actions.PHONE_FETCHING,
    };

    expect(actions.phoneFetching()).toEqual(expectedResult);
  });

  it('should create an action when phone fetching failed', () => {
    const expectedResult = {
      type: actions.PHONE_FETCHING_ERROR,
    };

    expect(actions.phoneFetchingError()).toEqual(expectedResult);
  });

  it('should create an action when phone fetching completed successfully with empty phones list', () => {
    const expectedResult = {
      type: actions.PHONE_FETCHING_SUCCESS,
      payload: { phones: [] },
    };

    expect(actions.phoneFetchingSuccess([])).toEqual(expectedResult);
  });

  it('should create an action when phone fetching completed successfully with not empty phones list', () => {
    const expectedResult = {
      type: actions.PHONE_FETCHING_SUCCESS,
      payload: { phones: utils.phones },
    };

    expect(actions.phoneFetchingSuccess(utils.phones)).toEqual(expectedResult);
  });

  it('should fetch phones and create a success action', () => {
    const expectedResult = [
      { type: actions.PHONE_FETCHING },
      {
        type: actions.PHONE_FETCHING_SUCCESS,
        payload: { phones: utils.phones },
      },
    ];

    axiosMock.onGet(endpoints.phones).reply(200, utils.phones);

    const store = mockStore({});

    return store.dispatch(actions.fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should fetch phones and create a failed action', () => {
    const expectedResult = [
      { type: actions.PHONE_FETCHING },
      {
        type: actions.PHONE_FETCHING_ERROR,
      },
    ];

    axiosMock.onGet(endpoints.phones).reply(500);

    const store = mockStore({});

    return store.dispatch(actions.fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should select phone with specific id', () => {
    const id = 'fakeId';

    const expectedResult = {
      type: actions.SELECT_PHONE,
      payload: { id },
    };

    expect(actions.selectPhone(id)).toEqual(expectedResult);
  });
});
